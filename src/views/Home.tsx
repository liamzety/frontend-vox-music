import React, { useEffect, useCallback } from 'react';
// Cmps
import { Banner } from '../cmps/Banner';
import { PlaylistAdd } from '../cmps/PlaylistAdd';
import { GenreList } from '../cmps/GenreList';
// Service
import { playlistService } from '../services/playlistService';
// Types
import { PlaylistType } from '../types/Playlist';
//Store
import { useStore } from '../store/StoreContext';
import { useObserver } from 'mobx-react';
export function Home() {
  const store = useStore();

  const getPlaylists = useCallback(async () => {
    store.setPlaylists(await playlistService.query());
  }, [store]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  async function onAddPlaylist(playlistToAdd: any): Promise<void> {
    const playlistAdded = await playlistService.add(playlistToAdd);
    store.addPlaylist(playlistAdded);
  }

  function onRemovePlaylist(playlistId: string): void {
    playlistService.remove(playlistId);
    store.removePlaylist(playlistId);
  }

  function onUpdatePlaylist(playlistToUpdate: PlaylistType): void {
    playlistService.update(playlistToUpdate);
    store.updatePlaylist(playlistToUpdate);
  }
  return useObserver(() => (
    <div className="home ">
      <Banner />
      <div className="container">
        <PlaylistAdd onAddPlaylist={onAddPlaylist} />
        <GenreList
          playlists={store.playlists}
          onUpdatePlaylist={onUpdatePlaylist}
          onRemovePlaylist={onRemovePlaylist}
        />
      </div>
    </div>
  ));
}
