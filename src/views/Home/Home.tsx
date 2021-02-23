import React, { useEffect, useCallback, useRef } from 'react';
//Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Service
import { scrollService } from '../../services/scrollService';
import { playlistService } from '../../services/playlistService';
import { genreService } from '../../services/genreService';
// Icons
import { BiWorld } from 'react-icons/bi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
// Styles
import { Footer, PlaylistListWrapper, AuthorCard } from './Home.styles';
// Cmps
import { Banner } from '../../cmps/Banner/Banner';
import { PlaylistList } from '../../cmps/PlaylistList/PlaylistList';
import { userService } from '../../services/userService';
import { Text } from '../../aux-cmps/Text/Text';
import { Svg } from '../../aux-cmps/Svg/Svg';

export const Home: React.FC = observer(() => {
  const { playlistStore, userStore } = useStore();

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
        <>
          <PlaylistListWrapper ref={genreListRef} className=" container-x">
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
          <Footer>
            <AuthorCard data-augmented-ui="tr-clip bl-clip border">
              <Text bold={true} type="p" color="blackMain">
                Liam Zety
              </Text>
              <a
                href="https://github.com/liamzety"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Svg pointer={true} size="24px" color="secTxt">
                  <AiFillGithub />
                </Svg>
              </a>
              <a
                href="https://www.linkedin.com/in/liam-zety-0b157b1b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Svg pointer={true} size="24px" color="secTxt">
                  <AiFillLinkedin />
                </Svg>
              </a>
              <a
                href="https://liamzety.herokuapp.com/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Svg pointer={true} size="24px" color="secTxt">
                  <BiWorld />
                </Svg>
              </a>
            </AuthorCard>
            <Text type="p" color="yellowMain">
              Copyrights 2021 © Vox Music.
            </Text>
          </Footer>
        </>
      )}
    </div>
  );
});
