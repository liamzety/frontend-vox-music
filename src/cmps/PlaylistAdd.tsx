import React, { useState } from 'react';
import { PlaylistType } from '../types/Playlist';

interface PlaylistAddProps {
  onAddPlaylist: (songToSuggest: PlaylistType) => Promise<any>;
}
export function PlaylistAdd({ onAddPlaylist }: PlaylistAddProps) {
  const DEFAULT_IMG = 'https://picsum.photos/200';
  const DEFAULT_NAME = 'My New Playlist!';
  const DEFAULT_DESCRIPTION = 'This is my awesome playlist!';
  const DEFAULT_GENRE = 'cyberpunk';

  const [playlistToAdd, setPlaylistToAdd] = useState<PlaylistType>({
    name: DEFAULT_NAME,
    description: DEFAULT_DESCRIPTION,
    genre: DEFAULT_GENRE,
    img: DEFAULT_IMG,
    songs: [],
  });
  async function onAddPlaylistInp(ev: React.FormEvent<HTMLInputElement>) {
    const { value, name } = ev.currentTarget;
    setPlaylistToAdd((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <form
      className="playlist-add"
      onSubmit={(ev) => {
        ev.preventDefault();
        onAddPlaylist(playlistToAdd);
      }}
    >
      <input
        onChange={onAddPlaylistInp}
        name="img"
        type="file"
        placeholder="playlist img"
      />
      <input
        onChange={onAddPlaylistInp}
        name="name"
        type="text"
        placeholder="playlist name"
      />
      <input
        onChange={onAddPlaylistInp}
        name="genre"
        type="text"
        placeholder="playlist genre"
      />
      <input
        onChange={onAddPlaylistInp}
        name="description"
        type="text"
        placeholder="playlist description"
      />
      <button>ok</button>
    </form>
  );
}
