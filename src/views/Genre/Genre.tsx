import React, { useEffect, useCallback, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
// Service
import { playlistService } from '../../services/playlistService';
import { genreService } from '../../services/genreService';
//Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
//Cmps
import { PlaylistList } from '../../cmps/PlaylistList/PlaylistList';
import { GenreContainer } from './genre-styles';
import { scrollService } from '../../services/scrollService';
import { SlideButton } from '../../aux-cmps/SlideButton/SlideButton';
import { Text } from '../../aux-cmps/Text/Text';

interface MatchParams {
  genre: string;
}
interface Props extends RouteComponentProps<MatchParams> {}
export const Genre: React.FC<Props> = observer(
  ({
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
      genres.unshift('All');
      setGenres(genres);
      store.setPlaylists(playlists);
    }, [store]);

    useEffect(() => {
      getPlaylists();
    }, [getPlaylists]);
    useEffect(() => {
      setIsOverflowing(scrollService.checkOverflow(listContainerRef));
    }, [listContainerRef]);

    const getGenreList = () => {
      return (
        genres &&
        genres.map((_genre: string, idx: number) => (
          <Link
            key={idx}
            className="flex align-center text-center justify-center"
            to={`/genre/${_genre}`}
          >
            <Text type="a" active={genre === _genre}>
              {_genre}
            </Text>
          </Link>
        ))
      );
    };
    return (
      <div className="container-y container-x">
        <Text type="a">
          <Link to="/">Go Back</Link>{' '}
        </Text>

        <Text underline={true} type="h2">
          {genre}
        </Text>
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
          <GenreContainer ref={listContainerRef}>
            {getGenreList()}
          </GenreContainer>
        </div>
        {genre && <PlaylistList genre={genre} playlists={store.playlists} />}
      </div>
    );
  }
);
