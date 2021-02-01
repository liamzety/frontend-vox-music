import React, { useEffect, useCallback, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
// Material UI
import { Slide } from '@material-ui/core';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Types
import { PlaylistType } from '../../types/Playlist';
import { ChatMsgType } from '../../types/ChatMsg';
// Services
import { playlistService } from '../../services/playlistService';
import { songService } from '../../services/songService';
import { regService } from '../../services/regService';
import socketService from '../../services/socketService';
// Styles
import { MainPage } from './main-styles';
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
    const { playerStore, playlistStore, userMsgStore, userStore } = useStore();

    // ---------------------Chat ------------------
    const [inRoom, setInRoom] = useState(false);
    const [msgs, setMsgs] = useState([]);
    const [msg, setMsg] = useState<ChatMsgType>({
      msgTxt: '',
      byUser: {
        name: '',
        profile_img: '',
      },
    });
    useEffect(() => {
      if (!inRoom) {
        socketService.setup();
        socketService.emit('chat connectRoom', playlistId);
        setInRoom(true);
      }
      socketService.on('chat addMsg', handleSentMsg);
      return () => {
        socketService.terminate();
      };
    }, []);
    const handleTyping = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setMsg({
        msgTxt: ev.target.value,
        byUser: {
          name: userStore.user.name,
          profile_img: userStore.user.profile_img,
        },
      });
    };

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
        console.log('playlist', playlist);
        console.log('playlistSongs', playlistSongs);
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

    const onRemovePlaylist = (playlistId: string): void => {
      playlistService.remove(playlistId);
      playlistStore.removePlaylist(playlistId);
    };
    function onUpdatePlaylist(playlistToUpdate: PlaylistType): void {
      playlistService.update(playlistToUpdate);
      playlistStore.updatePlaylist(playlistToUpdate);
    }
    // ---------------------Playlist CRUD END ------------------

    // ---------------------Song CRUD ------------------
    const onAddSong = async (songData: any) => {
      const video_id = songData.id.videoId;
      if (findIfExsits(video_id)) {
        userMsgStore.alert({
          msg: 'This song has already been added!',
          type: 'error',
        });
        userMsgStore.clearAlert();
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
      songService.remove(songId);
      playerStore.setCurrPlaylist({
        ...playerStore.player.currPlaylist,
        songs: [
          ...playerStore.player.currPlaylist.songs.filter(
            (song: any) => song._id !== songId
          ),
        ],
      });
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

    const [isChat, setIsChat] = useState(false);
    const onToggleChat = (): void => {
      if (!isChat) window.scrollTo(0, 0);
      setIsChat(!isChat);
    };
    const isMobile = window.innerWidth > 750;
    return (
      <MainPage className="container-y container-x">
        <Slide
          direction={isMobile ? 'right' : 'down'}
          in={isChat}
          mountOnEnter
          unmountOnExit
        >
          <div className="flex1">
            <UserChat
              msgs={msgs}
              handleTyping={handleTyping}
              handleSendMsg={handleSendMsg}
              onToggleChat={onToggleChat}
            />
          </div>
        </Slide>

        <div className="flex1">
          <MainHeader
            onToggleChat={onToggleChat}
            onRemovePlaylist={onRemovePlaylist}
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
