import React, { useEffect, useCallback, useRef } from 'react';
//Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Service
import { scrollService } from '../../services/scrollService';
import { playlistService } from '../../services/playlistService';
import { genreService } from '../../services/genreService';
// Styles
import { PlaylistListWrapper } from './Home.styles';
// Cmps
import { Banner } from '../../cmps/Banner/Banner';
import { PlaylistList } from '../../cmps/PlaylistList/PlaylistList';
import { userService } from '../../services/userService';

export const Home: React.FC = observer(() => {
  const { playlistStore, userStore, playerStore } = useStore();

  const getPlaylists = useCallback(async () => {
    playlistStore.setPlaylists(await playlistService.query());
  }, [playlistStore]);
  const getFavouritePlaylists = useCallback(async () => {
    try {
      userStore.setFavourites(
        await userService.getFavouritePlaylists(userStore.user._id)
      );
    } catch (err) {
      console.error('Error, Home.tsx -> function: :', err.message);
    }
  }, [userStore]);

  useEffect(() => {
    getPlaylists();
    if (userStore.user._id) {
      getFavouritePlaylists();
    }
  }, [getPlaylists, getFavouritePlaylists, userStore.user._id]);

  const genreListRef = useRef<HTMLDivElement>(null);

  const onHandleScroll = () => {
    scrollService.handleScroll(genreListRef);
  };
  return (
    <div>
      <Banner onHandleScroll={onHandleScroll} />
      {!playlistStore.playlists || playlistStore.playlists.length === 0 ? (
        ''
      ) : (
        <PlaylistListWrapper
          ref={genreListRef}
          className="container-y container-x"
        >
          {!userStore.user.favouritePlaylists ||
          userStore.user.favouritePlaylists.length === 0 ? (
            <>
              {console.log(
                'userStore.user.favouritePlaylists',
                userStore.user.favouritePlaylists
              )}
            </>
          ) : (
            <PlaylistList
              key={4242}
              playlists={userStore.user.favouritePlaylists}
              genre="Favourites"
            />
          )}
          {genreService.getGenreList().map((genre, idx) => {
            return (
              <PlaylistList
                key={idx}
                playlists={playlistStore.playlists}
                genre={genre}
              />
            );
          })}
        </PlaylistListWrapper>
      )}
    </div>
  );
});
