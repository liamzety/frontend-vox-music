import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  PlaylistListContainer,
  SlideBtnRight,
  SlideBtnLeft,
} from '../assets/style/components/playlistList';
import { PlaylistType } from '../types/Playlist';
import { PlaylistPreview } from './PlaylistPreview';
// icons
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
export function PlaylistList({
  genre,
  playlists,
  onRemovePlaylist,
  onUpdatePlaylist,
}: any) {
  const history = useHistory();
  const pathname = history.location.pathname;
  useEffect(() => {
    setScrollOptions((prevState) => {
      return {
        ...prevState,
        scrollMax: listContainerRef.current.clientWidth,
      };
    });
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
  const [scrollOptions, setScrollOptions] = useState({
    scrollAmount: 0,
    scrollMin: 0,
    scrollMax: null,
  });
  const handleScrollVertical = (left: boolean) => {
    listContainerRef.current.scrollTo({
      top: 0,
      left: left
        ? Math.max((scrollOptions.scrollAmount += 500), scrollOptions.scrollMax)
        : Math.min(
            (scrollOptions.scrollAmount -= 500),
            scrollOptions.scrollMin
          ),
      behavior: 'smooth',
    });
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
      {pathname === '/' && <h2>{genre}</h2>}
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
}
