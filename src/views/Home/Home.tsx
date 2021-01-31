import React, { useEffect, useCallback, useRef } from 'react';
//Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
import { scrollService } from '../../services/scrollService';
// Service
import { playlistService } from '../../services/playlistService';
import { genreService } from '../../services/genreService';
// Styles
import { PlaylistsSection, HomePage } from './home-styles';
// Cmps
import { Banner } from '../../cmps/Banner/Banner';
import { PlaylistList } from '../../cmps/PlaylistList/PlaylistList';

export const Home: React.FC = observer(() => {
  const { playlistStore } = useStore();

  const getPlaylists = useCallback(async () => {
    playlistStore.setPlaylists(await playlistService.query());
  }, [playlistStore]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  const genreListRef = useRef<HTMLDivElement>(null);

  const onHandleScroll = () => {
    scrollService.handleScroll(genreListRef);
  };
  return (
    <HomePage>
      <Banner onHandleScroll={onHandleScroll} />
      <div className="container-x">
        {!playlistStore.playlists || playlistStore.playlists.length === 0 ? (
          ''
        ) : (
          <PlaylistsSection ref={genreListRef} className="make padding top">
            {genreService.getGenreList().map((genre, idx) => {
              return (
                <PlaylistList
                  key={idx}
                  playlists={playlistStore.playlists}
                  genre={genre}
                />
              );
            })}
          </PlaylistsSection>
        )}
      </div>
    </HomePage>
  );
});
