import React, { useState } from 'react';
import { cloudinaryService } from '../services/cloudinaryService';
import { PlaylistType } from '../types/Playlist';
import { FiUpload } from 'react-icons/fi';
import {
  PlaylistAddImgLabel,
  PlaylistAddImgLoader,
  PlayListAddForm,
} from '../assets/style/components/playlistAdd';
import loader from '../assets/img/loader.gif';
import { genreService } from '../services/genreService';

interface PlaylistAddProps {
  onAddPlaylist: (songToSuggest: PlaylistType) => Promise<any>;
}
export function PlaylistAdd({ onAddPlaylist }: PlaylistAddProps) {
  const DEFAULT_IMG = 'https://picsum.photos/200';
  const DEFAULT_NAME = 'My New Playlist!';
  const DEFAULT_DESCRIPTION = 'This is my awesome playlist!';
  const DEFAULT_GENRE = 'Cyberpunk';

  const [playlistToAdd, setPlaylistToAdd] = useState<PlaylistType>({
    name: DEFAULT_NAME,
    description: DEFAULT_DESCRIPTION,
    genre: DEFAULT_GENRE,
    img: DEFAULT_IMG,
    songs: [],
  });
  const [isImgUploading, setIsImgUploading] = useState<boolean>(false);

  async function onAddPlaylistInp(event: React.FormEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget;
    setPlaylistToAdd((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  async function onAddPlaylistSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setPlaylistToAdd((prevState) => {
      return {
        ...prevState,
        genre: event.currentTarget.value,
      };
    });
  }
  const uploadImg = async (ev: any) => {
    setIsImgUploading(true);
    const res = await cloudinaryService.uploadImg(ev.target.files[0]);
    setIsImgUploading(false);
    setPlaylistToAdd((prevState) => {
      return {
        ...prevState,
        img: res.url,
      };
    });
  };
  return (
    <PlayListAddForm
      onSubmit={(ev) => {
        ev.preventDefault();
        if (isImgUploading) return;
        onAddPlaylist(playlistToAdd);
      }}
    >
      {isImgUploading ? (
        <PlaylistAddImgLabel htmlFor="imgUpload">
          <PlaylistAddImgLoader src={loader} alt="" />
          <p>Loading...</p>
        </PlaylistAddImgLabel>
      ) : (
        <div>
          <PlaylistAddImgLabel htmlFor="imgUpload">
            <FiUpload />
            <p>Upload Playlist Image</p>
          </PlaylistAddImgLabel>
          <input
            onChange={uploadImg}
            name="img"
            id="imgUpload"
            type="file"
            placeholder="playlist img"
            hidden
          />
        </div>
      )}

      <input
        onChange={onAddPlaylistInp}
        name="name"
        type="text"
        placeholder="playlist name"
      />
      <select onChange={onAddPlaylistSelect} name="genre" id="">
        {genreService.getGenreList().map((genre, idx) => {
          return (
            <option key={idx} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>

      <input
        onChange={onAddPlaylistInp}
        name="description"
        type="text"
        placeholder="playlist description"
      />
      <button>ok</button>
    </PlayListAddForm>
  );
}
