import React from 'react';
import { useObserver } from 'mobx-react';
// Types
import { PlaylistType } from '../../types/Playlist';
// Styles
import { genreService } from '../../services/genreService';
import { PlaylistList } from '../PlaylistList/PlaylistList';

interface GenreListProps {
  playlists: PlaylistType[];
  onUpdatePlaylist: (playlistToUpdate: PlaylistType) => void;
}
export const GenreList: React.FC<GenreListProps> = ({
  playlists,
  onUpdatePlaylist,
}) => {
  return useObserver(() => (
    <div>
      {!playlists || playlists.length === 0
        ? ''
        : genreService.getGenreList().map((genre, idx) => {
            return (
              <PlaylistList
                key={idx}
                onUpdatePlaylist={onUpdatePlaylist}
                playlists={playlists}
                genre={genre}
              />
            );
          })}
    </div>
  ));
};
