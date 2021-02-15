/* eslint-disable no-throw-literal */
import React, { useEffect, useCallback, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { debounce } from 'lodash';

// Material UI
import { Slide } from '@material-ui/core';
// Types
import { ChatMsgType } from '../../types/ChatMsg';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Services
import { playlistService } from '../../services/playlistService';
import { songService } from '../../services/songService';
import { regService } from '../../services/regService';
import socketService from '../../services/socketService';
// Styles
import { MainPage } from './Main.styles';
// Cmps
import { SongList } from '../../cmps/SongList/SongList';
import { SongSearch } from '../../cmps/SongSearch/SongSearch';
import { UserChat } from '../../cmps/UserChat/UserChat';
import { MainHeader } from '../../cmps/MainHeader/MainHeader';

interface MatchParams {
  playlistId: string;
}
interface Props extends RouteComponentProps<MatchParams> {}
export const Main: React.FC<Props> = observer(
  ({
    match: {
      params: { playlistId },
    },
  }) => {
    const {
      playerStore,
      playlistStore,
      userMsgStore,
      userStore,
      modalStore,
    } = useStore();
    const history = useHistory();

    const isSmallScreen = window.innerWidth > 1080;
    // ---------------------Chat ------------------
    const [inRoom, setInRoom] = useState(false);
    const [userTyping, setUserTyping] = useState('');
    const [msgs, setMsgs] = useState<ChatMsgType[]>([]);
    const [msg, setMsg] = useState<ChatMsgType>({
      timeSent: null,
      msgTxt: '',
      byUser: {
        name: '',
        profile_img: '',
      },
    });
    const [isChat, setIsChat] = useState(false);
    // When user signs off, close the chat
    useEffect(() => {
      if (!userStore.user.isSignedIn) {
        setIsChat(false);
      }
    }, [userStore.user.isSignedIn]);

    const onToggleChat = (): void => {
      if (!isChat) window.scrollTo(0, 0);
      setIsChat(!isChat);
    };

    useEffect(() => {
      if (!inRoom) {
        socketService.setup();
        socketService.emit('chat connectRoom', playlistId);
        setInRoom(true);
      }
      socketService.on('chat addMsg', handleSentMsg);
      socketService.on('chat showTyping', showTyping);

      return () => {
        socketService.terminate();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTyping = (ev: React.ChangeEvent<HTMLInputElement>) => {
      socketService.emit('chat typing', userStore.user.name);

      setMsg({
        msgTxt: ev.target.value,
        byUser: {
          name: userStore.user.name,
          profile_img: userStore.user.profile_img,
        },
        timeSent: Date.now(),
      });
    };
    // Setting the UserTyping and debouncing before clearing it
    function showTyping() {
      const userTyping: string = arguments[0];
      if (userTyping === userStore.user.name) return;
      setUserTyping(userTyping);
      handler();
    }

    const handler = useCallback(
      debounce(() => {
        setUserTyping('');
      }, 800),
      []
    );

    function handleSentMsg() {
      // slimey hack because of no parameters specified in .on method
      const msg = arguments[0];

      setMsgs((prevState) => {
        return [...prevState, msg];
      });
    }
    const handleSendMsg = () => {
      socketService.emit('chat newMsg', msg);
    };
    // ---------------------Chat END ------------------

    // ---------------------Playlist CRUD ------------------
    const getPlaylist = useCallback(
      async (playlistId: string) => {
        // Get playlist data and songs
        let { playlist, playlistSongs } = await playlistService.getById(
          playlistId
        );
        await playerStore.setCurrPlaylist({
          ...playlist,
          songs: [...playlistSongs],
        });
        // if playlist is not empty setting the currPlaying as the first song
        if (playlistSongs.length > 0) {
          const { title, url: imgUrl, video_id: songUrl } = playlistSongs[0];
          const firstSong = { imgUrl, songUrl, title, idx: 0 };

          playerStore.setCurrPlaying(firstSong);
        }
      },
      [playerStore]
    );
    useEffect(() => {
      getPlaylist(playlistId);
    }, [getPlaylist, playlistId]);

    const onRemovePlaylist = async () => {
      try {
        if (
          userStore.user.email !== 'liam@liam.com' &&
          userStore.user._id !== playerStore.player.currPlaylist.created_by
        ) {
          throw { msg: 'Only the owner of this playlist can delete it.' };
        }
        await playlistService.remove(playlistId);
        playlistStore.removePlaylist(playlistId);
        history.push('/');
        userMsgStore.alert({
          type: 'success',
          msg: 'Playlist removed successfully.',
        });
      } catch (err) {
        console.error('Error, Main.tsx -> function: :', err.msg);
        userMsgStore.alert({
          type: 'error',
          msg: err.msg,
        });
      }
      setTimeout(() => {
        userMsgStore.clearAlert();
      }, 4000);
    };
    const onUpdatePlaylist = (): void => {
      modalStore.toggleModal('updatePlaylist');
    };

    // ---------------------Playlist CRUD END ------------------

    // ---------------------Song CRUD ------------------
    const onAddSong = async (songData: any) => {
      const video_id = songData.id.videoId;
      if (findIfExsits(video_id)) {
        userMsgStore.alert({
          msg: 'This song has already been added!',
          type: 'error',
        });
        setTimeout(() => {
          userMsgStore.clearAlert();
        }, 4000);
        return;
      }

      let { title } = songData.snippet;
      title = regService.replaceCharRef(title);
      const { url } = songData.snippet.thumbnails.default;
      const playlist_id = playerStore.player.currPlaylist._id!;
      const songAdded = await songService.add({
        title,
        url,
        video_id,
        playlist_id,
      });
      playerStore.setCurrPlaylist({
        ...playerStore.player.currPlaylist,
        songs: [songAdded, ...playerStore.player.currPlaylist.songs],
      });
    };
    const onRemoveSong = (songId: string): void => {
      try {
        if (userStore.user._id !== playerStore.player.currPlaylist.created_by) {
          throw {
            msg: 'Only the owner of this playlist can delete songs from it.',
          };
        }
        songService.remove(songId);
        playerStore.setCurrPlaylist({
          ...playerStore.player.currPlaylist,
          songs: [
            ...playerStore.player.currPlaylist.songs.filter(
              (song: any) => song._id !== songId
            ),
          ],
        });
        userMsgStore.alert({
          type: 'success',
          msg: 'Song was removed from playlist',
        });
      } catch (err) {
        console.error('Error, Main.tsx -> function: :', err.msg);
        userMsgStore.alert({
          type: 'error',
          msg: err.msg,
        });
      }
      setTimeout(() => {
        userMsgStore.clearAlert();
      }, 4000);
    };
    // ---------------------Song CRUD END ------------------

    // Checks if the song the user wants to add already exsits in the playlist
    const findIfExsits = (video_id: string): boolean => {
      return playerStore.player.currPlaylist.songs.some(
        (song: any) => song.video_id === video_id
      );
    };
    // When user selects a song
    const handleSongSelect = (data: { songUrl: string; idx: number }): void => {
      playerStore.setCurrPlaying(data);
      playerStore.setPlayer({
        ...playerStore.player,
        isOn: true,
        isPlaying: true,
      });
    };

    return (
      <MainPage className="container-y container-x">
        <Slide
          direction={isSmallScreen ? 'right' : 'down'}
          in={isChat}
          mountOnEnter
          unmountOnExit
        >
          <div className="flex1">
            <UserChat
              playlistName={playerStore.currPlaylist.name}
              msgs={msgs}
              userTyping={userTyping}
              handleTyping={handleTyping}
              handleSendMsg={handleSendMsg}
              onToggleChat={onToggleChat}
            />
          </div>
        </Slide>

        <div className="flex1">
          <MainHeader
            isChat={isChat}
            onToggleChat={onToggleChat}
            onUpdatePlaylist={onUpdatePlaylist}
            onRemovePlaylist={onRemovePlaylist}
            userTyping={userTyping}
          />
          <SongSearch onAddSong={onAddSong} />
          <SongList
            handleSongSelect={handleSongSelect}
            onRemoveSong={onRemoveSong}
          />
        </div>
      </MainPage>
    );
  }
);
