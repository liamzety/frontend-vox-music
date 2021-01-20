import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlaylistPreviewContainer,
  PlaylistPreviewThumbnail,
} from './playlistPreview-styles';
import { Text } from '../../aux-cmps/Text/Text';

// Types
import { PlaylistType } from '../../types/Playlist';

interface PlaylistPreviewProps {
  playlist: PlaylistType;
  onRemovePlaylist: (playlistId: string) => void;
  onUpdatePlaylist: (playlistToUpdate: PlaylistType) => void;
}
export const PlaylistPreview: React.FC<PlaylistPreviewProps> = ({
  playlist,
  onRemovePlaylist,
  onUpdatePlaylist,
}) => {
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
    <PlaylistPreviewContainer>
      <Link to={`/main/${_prettyUrl(playlist.name)}=${playlist._id}`}>
        <PlaylistPreviewThumbnail src={playlist.img} alt="Playlist" />
        <Text type="p">{playlist.name}</Text>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            onRemovePlaylist(playlist._id!);
          }}
        >
          Remove
        </button>
      </Link>
    </PlaylistPreviewContainer>
  );
};
