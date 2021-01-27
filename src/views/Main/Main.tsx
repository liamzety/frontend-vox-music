import React, { useEffect, useCallback } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Types
import { PlaylistType } from '../../types/Playlist';
// Services
import { playlistService } from '../../services/playlistService';
import { songService } from '../../services/songService';
import { regService } from '../../services/regService';
// Cmps
import { SongList } from '../../cmps/SongList/SongList';
import { SongSearch } from '../../cmps/SongSearch/SongSearch';
import { Resizable } from 're-resizable';

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
    const store = useStore();

    const getPlaylist = useCallback(
      async (playlistId: string) => {
        // Get playlist data and songs
        let { playlist, playlistSongs } = await playlistService.getById(
          playlistId
        );
        await store.setCurrPlaylist({ ...playlist, songs: [...playlistSongs] });
        // if playlist is not empty setting the currPlaying as the first song
        if (playlistSongs.length > 0) {
          const { title, url: imgUrl, video_id: songUrl } = playlistSongs[0];
          const firstSong = { imgUrl, songUrl, title, idx: 0 };

          store.setCurrPlaying(firstSong);
        }
      },
      [store]
    );
    useEffect(() => {
      getPlaylist(playlistId);
    }, [getPlaylist, playlistId]);
    // ---------------------Playlist CRUD ------------------

    const onRemovePlaylist = (playlistId: string): void => {
      playlistService.remove(playlistId);
      store.removePlaylist(playlistId);
    };
    function onUpdatePlaylist(playlistToUpdate: PlaylistType): void {
      playlistService.update(playlistToUpdate);
      store.updatePlaylist(playlistToUpdate);
    }
    // ---------------------Song CRUD ------------------
    const onAddSong = async (songData: any) => {
      const video_id = songData.id.videoId;
      if (findIfExsits(video_id)) {
        store.alert({
          msg: 'This song has already been added!',
          type: 'error',
        });
        store.clearAlert();
        return;
      }

      let { title } = songData.snippet;
      title = regService.replaceCharRef(title);
      const { url } = songData.snippet.thumbnails.default;
      const playlist_id = store.player.currPlaylist._id!;
      const songAdded = await songService.add({
        title,
        url,
        video_id,
        playlist_id,
      });
      store.setCurrPlaylist({
        ...store.player.currPlaylist,
        songs: [songAdded, ...store.player.currPlaylist.songs],
      });
    };
    const onRemoveSong = (songId: string): void => {
      songService.remove(songId);
      store.setCurrPlaylist({
        ...store.player.currPlaylist,
        songs: [
          ...store.player.currPlaylist.songs.filter(
            (song: any) => song._id !== songId
          ),
        ],
      });
    };

    // Checks if the song the user wants to add already exsits in the playlist
    const findIfExsits = (video_id: string): boolean => {
      return store.player.currPlaylist.songs.some(
        (song: any) => song.video_id === video_id
      );
    };
    // When user selects a song
    const handleSongSelect = (data: { songUrl: string; idx: number }): void => {
      store.setCurrPlaying(data);
      store.setPlayer({ ...store.player, isOn: true, isPlaying: true });
    };

    return (
      <div className="container-y">
        <div className="container-x ">
          <img
            style={{ width: '50px' }}
            src={store.player.currPlaylist.img}
            alt="thumbnail"
          />
          <h1>{store.player.currPlaylist.name}</h1>
          <h2>{store.player.currPlaylist.description}</h2>
          <p>Genre: {store.player.currPlaylist.genre}</p>
          <Link to={`/`}>
            <button
              onClick={() => {
                onRemovePlaylist(store.player.currPlaylist._id!);
              }}
            >
              Delete Playlist
            </button>
          </Link>
          <SongList
            handleSongSelect={handleSongSelect}
            currPlaylist={store.player.currPlaylist}
            onRemoveSong={onRemoveSong}
          />
          <SongSearch onAddSong={onAddSong} />
        </div>
      </div>
    );
  }
);
