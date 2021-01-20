import React, { useEffect, useCallback } from 'react';
// Service
import { playlistService } from '../../services/playlistService';
//Store
import { useStore } from '../../store/StoreContext';
import { useObserver } from 'mobx-react';
//Cmps
import { PlaylistList } from '../../cmps/PlaylistList/PlaylistList';
import { PlaylistType } from '../../types/Playlist';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  genre: string;
}
interface Props extends RouteComponentProps<MatchParams> {}
export const Genre: React.FC<Props> = ({
  match: {
    params: { genre },
  },
}) => {
  const store = useStore();

  const getPlaylists = useCallback(async () => {
    store.setPlaylists(await playlistService.query());
  }, [store]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  function onRemovePlaylist(playlistId: string): void {
    playlistService.remove(playlistId);
    store.removePlaylist(playlistId);
  }
  function onUpdatePlaylist(playlistToUpdate: PlaylistType): void {
    playlistService.update(playlistToUpdate);
    store.updatePlaylist(playlistToUpdate);
  }
  return useObserver(() => (
    <div className="container-y container-x">
      <h1>Add more </h1>

      <PlaylistList
        genre={genre}
        playlists={store.playlists}
        onRemovePlaylist={onRemovePlaylist}
        onUpdatePlaylist={onUpdatePlaylist}
      />
    </div>
  ));
};
