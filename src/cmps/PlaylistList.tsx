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
import { useSwipeable } from 'react-swipeable';
export function PlaylistList({
  genre,
  playlists,
  onRemovePlaylist,
  onUpdatePlaylist,
}: any) {
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
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => handleScrollVerticalMobile(true, eventData),
    onSwipedRight: (eventData) => handleScrollVerticalMobile(false, eventData),
  });

  const handleScrollVerticalMobile = (left: boolean, eventData: any) => {
    const scrollMax = listContainerRef.current.scrollWidth;
    const scrollMin = 0;
    if (left) {
      Math.max(
        (listContainerRef.current.scrollLeft -= eventData.deltaX),
        scrollMax
      );
    } else {
      Math.min(
        (listContainerRef.current.scrollLeft -= eventData.deltaX),
        scrollMin
      );
    }
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

  const refPassthrough = (el: any) => {
    // call useSwipeable ref prop with el
    handlers.ref(el);

    // set myRef el so you can access it yourself
    listContainerRef.current = el;
  };

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
        ref={refPassthrough}
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
