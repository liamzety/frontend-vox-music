import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
// Services
import { localImgService } from '../../services/localImgService';
import { cloudinaryService } from '../../services/cloudinaryService';
import { genreService } from '../../services/genreService';
import { playlistService } from '../../services/playlistService';
// Types
import { PlaylistType } from '../../types/Playlist';
// Icons
import { FiUpload } from 'react-icons/fi';
// Styles
import { PlaylistAddImgLabel, PlaylistAddForm } from './playlistAdd-styles';
// Imgs
import templatePlaylistImg from '../../assets/img/vox-music.png';
// Cmps
import { Loader } from '../Loader/Loader';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Text } from '../../aux-cmps/Text/Text';
import { Input } from '../../aux-cmps/Input/Input';

interface PlaylistAddProps {}
export const PlaylistAdd: React.FC<PlaylistAddProps> = () => {
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
  const { playlistStore, modalStore, userMsgStore, userStore } = useStore();
  const history = useHistory();

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
  async function onAddPlaylist(playlistToAdd: PlaylistType): Promise<void> {
    playlistToAdd.created_by = userStore.user._id;
    try {
      const playlistAdded = await playlistService.add(playlistToAdd);
      playlistStore.addPlaylist(playlistAdded);
      if (history.location.pathname !== '/') {
        history.push(`/main/${playlistAdded.name}=${playlistAdded._id}`);
      }
      userMsgStore.alert({
        type: 'success',
        msg: 'Playlist added successfully.',
      });
    } catch (err) {
      console.error('Error, PlaylistAdd.tsx -> function: :', err.msg);
      userMsgStore.alert({
        type: 'error',
        msg: err.msg,
      });
    }
    modalStore.toggleModal();
    setTimeout(() => {
      userMsgStore.clearAlert();
    }, 3000);
  }
  return (
    <PlaylistAddForm
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
        <Input
          onChange={uploadImg}
          name="img"
          id="imgUpload"
          type="file"
          placeholder="playlist img"
          hidden
        />
      </div>

      <Input
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

      <Input
        onChange={onAddPlaylistInp}
        name="description"
        type="text"
        placeholder="playlist description"
      />
      <button>ok</button>
    </PlaylistAddForm>
  );
};
