import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PlaylistListContainer } from './playlistList-styles';
import { PlaylistType } from '../../types/Playlist';
import { PlaylistPreview } from '../PlaylistPreview/PlaylistPreview';
import { Text } from '../../aux-cmps/Text/Text';
import { scrollService } from '../../services/scrollService';

import { SlideButton } from '../../aux-cmps/SlideButton/SlideButton';

interface PlaylistListProps {
  genre: string;
  playlists: PlaylistType[];
  onUpdatePlaylist: (playlistToUpdate: PlaylistType) => void;
}
export const PlaylistList: React.FC<PlaylistListProps> = ({
  genre,
  playlists,
  onUpdatePlaylist,
}) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const listContainerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    setIsOverflowing(scrollService.checkOverflow(listContainerRef));
  }, [playlists.length]);

  const getPlaylistPreviews = () => {
    const playlistPreviewsByGenre = playlists.filter(
      (playlist: PlaylistType) => playlist.genre === genre
    );
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
        <PlaylistPreview
          key={idx}
          playlist={playlist}
          onUpdatePlaylist={onUpdatePlaylist}
        />
      )
    );
  };

  return (
    <div>
      <div className="flex space-between align-center">
        {pathname === '/' && <Text type="h3">{genre}</Text>}
        {pathname === '/' && (
          <Link to={`/genre/${genre}`}>
            <Text type="a">Show All</Text>
          </Link>
        )}
      </div>

      <PlaylistListContainer
        justifyCenter={pathname === '/' ? ' initial' : 'center'}
        wrap={pathname === '/' ? ' no-wrap' : 'wrap'}
        ref={listContainerRef}
      >
        {pathname === '/' && isOverflowing && (
          <>
            <SlideButton
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
          </>
        )}
        {getPlaylistPreviews()}
      </PlaylistListContainer>
    </div>
  );
};
