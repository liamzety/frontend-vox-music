import React, { useEffect, useCallback } from 'react';
// Service
import { playlistService } from '../services/playlistService';
//Store
import { useStore } from '../store/StoreContext';
import { useObserver } from 'mobx-react';
//Cmps
import { PlaylistList } from '../cmps/PlaylistList';

export function Genre(props: any) {
  const genre = props.match.params.genre;
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

  return useObserver(() => (
    <div className="container-y container-x">
      <h1>Add more </h1>

      <PlaylistList
        genre={genre}
        playlists={store.playlists}
        onRemovePlaylist={onRemovePlaylist}
      />
    </div>
  ));
}
