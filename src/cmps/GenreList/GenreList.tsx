import React from 'react';
import { useObserver } from 'mobx-react';
// Types
import { PlaylistType } from '../../types/Playlist';
// Styles
import { genreService } from '../../services/genreService';
import { PlaylistList } from '../PlaylistList/PlaylistList';
import { GnereListContainer } from './genreList-styles';

interface GenreListProps {
  playlists: PlaylistType[];
  onUpdatePlaylist: (playlistToUpdate: PlaylistType) => void;
}
export const GenreList: React.FC<GenreListProps> = ({
  playlists,
  onUpdatePlaylist,
}) => {
  return useObserver(() => (
    <>
      {!playlists || playlists.length === 0 ? (
        ''
      ) : (
        <GnereListContainer>
          {genreService.getGenreList().map((genre, idx) => {
            return (
              <PlaylistList
                key={idx}
                onUpdatePlaylist={onUpdatePlaylist}
                playlists={playlists}
                genre={genre}
              />
            );
          })}
        </GnereListContainer>
      )}
    </>
  ));
};
