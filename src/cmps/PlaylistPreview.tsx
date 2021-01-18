import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlaylistPreviewContainer,
  PlaylistPreviewThumbnail,
} from '../assets/style/components/playlistPreview';
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
    <Link to={`/main/${_prettyUrl(playlist.name)}=${playlist._id}`}>
      <PlaylistPreviewContainer>
        <PlaylistPreviewThumbnail src={playlist.img} alt="Playlist" />
        <h5>{playlist.name}</h5>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            onRemovePlaylist(playlist._id!);
          }}
        >
          Remove
        </button>
      </PlaylistPreviewContainer>
    </Link>
  );
};
