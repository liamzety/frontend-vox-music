import React, { useEffect, useCallback, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
//Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Service
import { playlistService } from '../../services/playlistService';
import { genreService } from '../../services/genreService';
import { scrollService } from '../../services/scrollService';
// Styles
import { GenreHeader, GenreContainer, GenreListWrapper } from './Genre.styles';
//Cmps
import { PlaylistList } from '../../cmps/PlaylistList/PlaylistList';
import { SliderButton } from '../../aux-cmps/SliderButton/SliderButton';
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
    const { playlistStore } = useStore();
    const [genres, setGenres] = useState<Array<string>>();
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
    const listContainerRef = React.createRef<HTMLDivElement>();

    const getPlaylists = useCallback(async () => {
      const playlists = await playlistService.query();
      const genres = await genreService.getGenreList();
      genres.unshift('All');
      setGenres(genres);
      playlistStore.setPlaylists(playlists);
    }, [playlistStore]);

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
      <div className="container-y container-x ">
        <GenreHeader>
          <Text type="a">
            <Link to="/">Go Back</Link>{' '}
          </Text>

          <Text underline={true} type="h2">
            {genre}
          </Text>
        </GenreHeader>
        <GenreListWrapper data-augmented-ui="br-2-clip-x bl-2-clip-x border ">
          {isOverflowing && (
            <SliderButton
              leftRight="5px"
              color="mainBorder"
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
        </GenreListWrapper>
        {genre && (
          <PlaylistList genre={genre} playlists={playlistStore.playlists} />
        )}
      </div>
    );
  }
);
