import React, { useState } from 'react';
// Services
import { cloudinaryService } from '../../services/cloudinaryService';
import { genreService } from '../../services/genreService';
// Types
import { PlaylistType } from '../../types/Playlist';
// Icons
import { FiUpload } from 'react-icons/fi';
// Styles
import { PlaylistAddImgLabel, PlayListAddForm } from './playlistAdd-styles';
// Imgs
import templatePlaylistImg from '../../assets/img/vox-music.png';
// Cmps
import { Loader } from '../Loader/Loader';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Text } from '../../aux-cmps/Text/Text';
import { localImgService } from '../../services/localImgService';

interface PlaylistAddProps {
  onAddPlaylist: (songToSuggest: PlaylistType) => Promise<any>;
}
export const PlaylistAdd: React.FC<PlaylistAddProps> = ({ onAddPlaylist }) => {
  const DEFAULT_IMG = templatePlaylistImg;
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
  function onAddPlaylistSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const targetValue = event.currentTarget.value;
    setPlaylistToAdd((prevState) => {
      return {
        ...prevState,
        genre: targetValue,
      };
    });
  }
  const uploadImg = async (ev: React.ChangeEvent<HTMLInputElement>) => {
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
      <div>
        <PlaylistAddImgLabel htmlFor="imgUpload">
          {isImgUploading ? (
            <Loader loader={localImgService.defaultLoaderDark} size="25px" />
          ) : (
            <Svg size="25px">
              <FiUpload />
            </Svg>
          )}
          <Text type="p">Upload Playlist Image</Text>
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
};
