import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  PlaylistListContainer,
  SlideBtnRight,
  SlideBtnLeft,
} from './playlistList-styles';
import { PlaylistType } from '../../types/Playlist';
import { PlaylistPreview } from '../PlaylistPreview/PlaylistPreview';
import { Text } from '../../aux-cmps/Text/Text';
// icons
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

interface PlaylistListProps {
  genre: string;
  playlists: PlaylistType[];
  onUpdatePlaylist: (playlistToUpdate: PlaylistType) => void;
  onRemovePlaylist: (playlistId: string) => void;
}
export const PlaylistList: React.FC<PlaylistListProps> = ({
  genre,
  playlists,
  onRemovePlaylist,
  onUpdatePlaylist,
}) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  useEffect(() => {
    checkOverflow();
  }, [playlists.length]);
  const getPlaylistPreviews = () => {
    const playlistPreviewsByGenre = playlists.filter(
      (playlist: PlaylistType) => playlist.genre === genre
    );
    if (playlistPreviewsByGenre.length === 0)
      return <h2>No Playlists Found 😞</h2>;
    return playlistPreviewsByGenre.map(
      (playlist: PlaylistType, idx: number) => (
        <PlaylistPreview
          key={idx}
          playlist={playlist}
          onRemovePlaylist={onRemovePlaylist}
          onUpdatePlaylist={onUpdatePlaylist}
        />
      )
    );
  };

  const listContainerRef: any = React.createRef();
  const handleScrollVertical = (left: boolean) => {
    const scrollMax = listContainerRef.current.scrollWidth;
    const scrollMin = 0;

    if (left) Math.max((listContainerRef.current.scrollLeft += 500), scrollMax);
    else Math.min((listContainerRef.current.scrollLeft -= 500), scrollMin);
  };

  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  function checkOverflow() {
    setIsOverflowing(
      listContainerRef.current.clientWidth <
        listContainerRef.current.scrollWidth ||
        listContainerRef.current.clientHeight <
          listContainerRef.current.scrollHeight
    );
  }

  return (
    <div>
      {pathname === '/' && <Text type="h3">{genre}</Text>}
      {pathname === '/' ? (
        <Link to={`/${genre}`}>SHOW ALL</Link>
      ) : (
        <Link to="/">Go Back</Link>
      )}

      <PlaylistListContainer
        justifyCenter={pathname === '/' ? ' initial' : 'center'}
        wrap={pathname === '/' ? ' no-wrap' : 'wrap'}
        ref={listContainerRef}
      >
        {pathname === '/' && (
          <SlideBtnLeft onClick={handleScrollVertical.bind({}, false)}>
            {isOverflowing && <IoIosArrowDropleftCircle />}
          </SlideBtnLeft>
        )}

        {getPlaylistPreviews()}
        {pathname === '/' && (
          <SlideBtnRight onClick={handleScrollVertical.bind({}, true)}>
            {isOverflowing && <IoIosArrowDroprightCircle />}
          </SlideBtnRight>
        )}
      </PlaylistListContainer>
    </div>
  );
};
