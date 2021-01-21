import React, { useEffect, useCallback, useState } from 'react';
// Service
import { playlistService } from '../../services/playlistService';
import { genreService } from '../../services/genreService';
//Store
import { useStore } from '../../store/StoreContext';
import { useObserver } from 'mobx-react';
//Cmps
import { PlaylistList } from '../../cmps/PlaylistList/PlaylistList';
import { PlaylistType } from '../../types/Playlist';
import { Link, RouteComponentProps } from 'react-router-dom';
import { GenreContainer } from './genre-styles';
import { scrollService } from '../../services/scrollService';
import { SlideButton } from '../../aux-cmps/SlideButton/SlideButton';
import { Text } from '../../aux-cmps/Text/Text';

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
  const [genres, setGenres] = useState<Array<string>>();
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const listContainerRef = React.createRef<HTMLDivElement>();

  const getPlaylists = useCallback(async () => {
    const playlists = await playlistService.query();
    const genres = await genreService.getGenreList();
    setGenres(genres);
    store.setPlaylists(playlists);
  }, [store]);

  useEffect(() => {
    console.log('im here', genre);
    getPlaylists();
  }, [getPlaylists]);
  useEffect(() => {
    setIsOverflowing(scrollService.checkOverflow(listContainerRef));
  }, [listContainerRef]);

  function onUpdatePlaylist(playlistToUpdate: PlaylistType): void {
    playlistService.update(playlistToUpdate);
    store.updatePlaylist(playlistToUpdate);
  }
  const getGenreList = () => {
    return (
      genres &&
      genres.map((genre: string, idx: number) => (
        <Link className="flex align-center text-center" to={`/genre/${genre}`}>
          <Text type="a" key={idx}>
            {genre}
          </Text>
        </Link>
      ))
    );
  };
  return useObserver(() => (
    <div className="container-y container-x">
      <Text type="a">
        <Link to="/">Go Back</Link>{' '}
      </Text>

      <Text type="h2">{genre || 'Genres'} </Text>
      {isOverflowing && (
        <SlideButton
          maxWidth="740px"
          position="relative"
          leftRight="5px"
          cbRight={scrollService.handleScrollVertical.bind(
            {},
            true,
            listContainerRef
          )}
          cbLeft={scrollService.handleScrollVertical.bind(
            {},
            false,
            listContainerRef
          )}
        />
      )}
      <div className="flex justify-center">
        <GenreContainer ref={listContainerRef}>{getGenreList()}</GenreContainer>
      </div>
      {genre && (
        <PlaylistList
          genre={genre}
          playlists={store.playlists}
          onUpdatePlaylist={onUpdatePlaylist}
        />
      )}
    </div>
  ));
};
