import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Styles
import {
  PlaylistListContainer,
  PlaylistListStyle,
  PlaylistListWrapper,
} from './playlistList-styles';
// Types
import { PlaylistType } from '../../types/Playlist';
// Services
import { scrollService } from '../../services/scrollService';
// Cmps
import { PlaylistPreview } from '../PlaylistPreview/PlaylistPreview';
import { Text } from '../../aux-cmps/Text/Text';
import { SliderButton } from '../../aux-cmps/SliderButton/SliderButton';

interface PlaylistListProps {
  genre: string;
  playlists: PlaylistType[];
}
export const PlaylistList: React.FC<PlaylistListProps> = ({
  genre,
  playlists,
}) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const listContainerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    setIsOverflowing(scrollService.checkOverflow(listContainerRef));
  }, [playlists.length, listContainerRef]);

  const getPlaylistPreviews = () => {
    let playlistPreviewsByGenre = [];
    if (genre === 'All') {
      playlistPreviewsByGenre = playlists;
    } else {
      playlistPreviewsByGenre = playlists.filter(
        (playlist: PlaylistType) => playlist.genre === genre
      );
    }
    if (playlistPreviewsByGenre.length === 0)
      return (
        <Text type="h3">
          No Playlists Found{' '}
          <span role="img" aria-label="emoji-sad">
            😞
          </span>{' '}
        </Text>
      );
    return playlistPreviewsByGenre.map(
      (playlist: PlaylistType, idx: number) => (
        <PlaylistPreview key={idx} playlist={playlist} />
      )
    );
  };

  return (
    <PlaylistListStyle>
      <div className="genre-list-container flex space-between align-center">
        {pathname === '/' && (
          <Text underline={true} type="h3">
            {genre}
          </Text>
        )}
        {pathname === '/' && (
          <Link to={`/genre/${genre}`}>
            <Text type="a">Show All</Text>
          </Link>
        )}
      </div>
      <PlaylistListWrapper>
        <PlaylistListContainer
          justifyCenter={pathname === '/' ? ' initial' : 'center'}
          wrap={pathname === '/' ? ' no-wrap' : 'wrap'}
          ref={listContainerRef}
        >
          {pathname === '/' && isOverflowing && (
            <SliderButton
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
              leftRight="15px"
            />
          )}
          {getPlaylistPreviews()}
        </PlaylistListContainer>
      </PlaylistListWrapper>
    </PlaylistListStyle>
  );
};
