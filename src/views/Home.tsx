import React, { useEffect } from 'react';
// Cmps
import { Banner } from '../cmps/Banner';
import { PlaylistAdd } from '../cmps/PlaylistAdd';
import { PlaylistList } from '../cmps/PlaylistList';
// Service
import { playlistService } from '../services/playlistService';
// Types
import { PlaylistType } from '../types/Playlist';
//Store
import { useStore } from '../store/StoreContext';
import { useObserver } from 'mobx-react';
export function Home() {
  const store = useStore();
  useEffect(() => {
    getPlaylists();
  }, []);

  async function getPlaylists(): Promise<void> {
    store.setPlaylists(await playlistService.query());
  }
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
    <div className="home">
      <Banner />
      <PlaylistList
        playlists={store.playlists}
        onUpdatePlaylist={onUpdatePlaylist}
        onRemovePlaylist={onRemovePlaylist}
      />
      <PlaylistAdd onAddPlaylist={onAddPlaylist} />
    </div>
  ));
}
