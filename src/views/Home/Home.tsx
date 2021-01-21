import React, { useEffect, useCallback, useRef } from 'react';
// Cmps
import { Banner } from '../../cmps/Banner/Banner';
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

  function onUpdatePlaylist(playlistToUpdate: PlaylistType): void {
    playlistService.update(playlistToUpdate);
    store.updatePlaylist(playlistToUpdate);
  }
  const genreListRef = useRef<HTMLDivElement>(null);

  const onHandleScroll = () => {
    scrollService.handleScroll(genreListRef);
    
  };
  return useObserver(() => (
    <div>
      <Banner onHandleScroll={onHandleScroll} playlists={store.playlists} />
      <div className="container-x">
        <div ref={genreListRef}>
          <GenreList
            playlists={store.playlists}
            onUpdatePlaylist={onUpdatePlaylist}
          />
        </div>
      </div>
    </div>
  ));
};
