import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Types
import { PlaylistType } from '../types/Playlist';

interface PlaylistPreviewProps {
  playlist: PlaylistType;
  onRemovePlaylist: (playlistId: string) => void;
  onUpdatePlaylist: (playlistToUpdate: PlaylistType) => void;
}
export const PlaylistPreview = ({
  playlist,
  onRemovePlaylist,
  onUpdatePlaylist,
}: PlaylistPreviewProps) => {
  const [playlistToUpdate, setPlaylistToUpdate] = useState(playlist);

  const onUpdateTempInp = (ev: React.FormEvent<HTMLInputElement>) => {
    setPlaylistToUpdate({
      ...playlistToUpdate,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  };
  const _prettyUrl = (name: string | undefined): string => {
    return name!.replace(/\s/g, '_');
  };
  return (
    <Link to={`/player/${_prettyUrl(playlist.name)}=${playlist._id}`}>
      <div className="playlist-preview">
        <img src={playlist.img} />
        <h2>{playlist.name}</h2>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            onRemovePlaylist(playlist._id!);
          }}
        >
          Remove
        </button>
      </div>
    </Link>
  );
};
