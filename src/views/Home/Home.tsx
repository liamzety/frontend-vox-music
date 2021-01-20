import React, { useEffect, useCallback, useRef } from 'react';
// Cmps
import { Banner } from '../../cmps/Banner/Banner';
import { PlaylistAdd } from '../../cmps/PlaylistAdd/PlaylistAdd';
import { GenreList } from '../../cmps/GenreList/GenreList';
// Service
import { playlistService } from '../../services/playlistService';
// Types
import { PlaylistType } from '../../types/Playlist';
//Store
import { useStore } from '../../store/StoreContext';
import { useObserver } from 'mobx-react';
import { scrollService } from '../../services/scrollService';
export const Home: React.FC = () => {
  const store = useStore();

  const getPlaylists = useCallback(async () => {
    store.setPlaylists(await playlistService.query());
  }, [store]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  async function onAddPlaylist(playlistToAdd: PlaylistType): Promise<void> {
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
  const genreListRef = useRef(null);

  const onHandleScroll = () => {
    scrollService.handleScroll(genreListRef);
  };
  return useObserver(() => (
    <div>
      <Banner onHandleScroll={onHandleScroll} />
      <div className="container-x">
        <PlaylistAdd onAddPlaylist={onAddPlaylist} />

        <div ref={genreListRef}>
          <GenreList
            playlists={store.playlists}
            onUpdatePlaylist={onUpdatePlaylist}
            onRemovePlaylist={onRemovePlaylist}
          />
        </div>
      </div>
    </div>
  ));
};
