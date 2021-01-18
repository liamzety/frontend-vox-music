import React from 'react';
import { Loader } from './Loader';
import { useObserver } from 'mobx-react';
// Types
import { PlaylistType } from '../types/Playlist';
// Styles
import { genreService } from '../services/genreService';
import { PlaylistList } from './PlaylistList';

interface GenreListProps {
  playlists: PlaylistType[];
  onUpdatePlaylist: (playlistToUpdate: PlaylistType) => void;
  onRemovePlaylist: (playlistId: string) => void;
}
export function GenreList({
  playlists,
  onUpdatePlaylist,
  onRemovePlaylist,
}: GenreListProps) {
  return useObserver(() => (
    <div>
      {!playlists || playlists.length === 0 ? (
        <Loader />
      ) : (
        genreService.getGenreList().map((genre, idx) => {
          return (
            <PlaylistList
              key={idx}
              onRemovePlaylist={onRemovePlaylist}
              onUpdatePlaylist={onUpdatePlaylist}
              playlists={playlists}
              genre={genre}
            />
          );
        })
      )}
    </div>
  ));
}
