import React from 'react';
import { PlaylistListContainer } from '../assets/style/components/playlistList';
import { PlaylistType } from '../types/Playlist';
import { PlaylistPreview } from './PlaylistPreview';

export function PlaylistList({
  genre,
  playlists,
  onRemovePlaylist,
  onUpdatePlaylist,
}: any) {
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

  return (
    <div className="">
      <h2>{genre}</h2>
      <PlaylistListContainer className="container">
        {getPlaylistPreviews()}
      </PlaylistListContainer>
    </div>
  );
}
