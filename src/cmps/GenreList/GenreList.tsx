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
  onRemovePlaylist: (playlistId: string) => void;
}
export const GenreList: React.FC<GenreListProps> = ({
  playlists,
  onUpdatePlaylist,
  onRemovePlaylist,
}) => {
  return useObserver(() => (
    <div>
      {!playlists || playlists.length === 0
        ? ''
        : genreService.getGenreList().map((genre, idx) => {
            return (
              <PlaylistList
                key={idx}
                onRemovePlaylist={onRemovePlaylist}
                onUpdatePlaylist={onUpdatePlaylist}
                playlists={playlists}
                genre={genre}
              />
            );
          })}
    </div>
  ));
};
