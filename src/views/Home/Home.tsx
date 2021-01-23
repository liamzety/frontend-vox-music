import React, { useEffect, useCallback, useRef } from 'react';
//Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
import { scrollService } from '../../services/scrollService';
// Service
import { playlistService } from '../../services/playlistService';
// Cmps
import { Banner } from '../../cmps/Banner/Banner';
import { GenreList } from '../../cmps/GenreList/GenreList';

export const Home: React.FC = observer(() => {
  const store = useStore();

  const getPlaylists = useCallback(async () => {
    store.setPlaylists(await playlistService.query());
  }, [store]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  const genreListRef = useRef<HTMLDivElement>(null);

  const onHandleScroll = () => {
    scrollService.handleScroll(genreListRef);
  };
  return (
    <div>
      <Banner onHandleScroll={onHandleScroll} playlists={store.playlists} />
      <div className="container-x">
        <div ref={genreListRef}>
          <GenreList playlists={store.playlists} />
        </div>
      </div>
    </div>
  );
});
