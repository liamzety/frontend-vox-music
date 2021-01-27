import React from 'react';
// Store
import { observer } from 'mobx-react';
// Types
import { PlaylistType } from '../../types/Playlist';
// Styles
import { genreService } from '../../services/genreService';
import { PlaylistList } from '../PlaylistList/PlaylistList';
import { GnereListContainer } from './genreList-styles';

interface GenreListProps {
  playlists: PlaylistType[];
}
export const GenreList: React.FC<GenreListProps> = observer(({ playlists }) => {
  return (
    <>
      {!playlists || playlists.length === 0 ? (
        ''
      ) : (
        <>
          <GnereListContainer>
            {genreService.getGenreList().map((genre, idx) => {
              return (
                <PlaylistList key={idx} playlists={playlists} genre={genre} />
              );
            })}
          </GnereListContainer>
        </>
      )}
    </>
  );
});
