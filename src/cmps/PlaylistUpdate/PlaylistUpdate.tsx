/* eslint-disable no-throw-literal */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
// Services
import { cloudinaryService } from '../../services/cloudinaryService';
import { genreService } from '../../services/genreService';
import { localImgService } from '../../services/localImgService';
import { playlistService } from '../../services/playlistService';
// Types
import { PlaylistType } from '../../types/Playlist';
// Icons
import { FiUpload } from 'react-icons/fi';
// Styles
import {
  PlaylistUpdateImgLabel,
  PlaylistUpdateForm,
} from './playlistUpdate-styles';
// Cmps

import { Loader } from '../Loader/Loader';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Text } from '../../aux-cmps/Text/Text';

export const PlaylistUpdate: React.FC = () => {
  const [isImgUploading, setIsImgUploading] = useState<boolean>(false);
  const {
    playerStore,
    playlistStore,
    modalStore,
    userMsgStore,
    userStore,
  } = useStore();
  const history = useHistory();

  const DEFAULT_IMG = playerStore.currPlaylist.img;
  const DEFAULT_NAME = playerStore.currPlaylist.name;
  const DEFAULT_DESCRIPTION = playerStore.currPlaylist.description;
  const DEFAULT_GENRE = playerStore.currPlaylist.genre;

  const [playlistToUpdate, setPlaylistToUpdate] = useState<PlaylistType>({
    name: DEFAULT_NAME,
    description: DEFAULT_DESCRIPTION,
    genre: DEFAULT_GENRE,
    img: DEFAULT_IMG,
    songs: [],
  });
  async function onUpdatePlaylistInp(event: React.FormEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget;
    setPlaylistToUpdate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  function onUpdatePlaylistSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const targetValue = event.currentTarget.value;
    setPlaylistToUpdate((prevState) => {
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
    setPlaylistToUpdate((prevState) => {
      return {
        ...prevState,
        img: res.url,
      };
    });
  };
  const onUpdatePlaylist = async (
    playlistToUpdate: PlaylistType
  ): Promise<void> => {
    playlistToUpdate._id = playerStore.currPlaylist._id;

    try {
      if (userStore.user._id !== playerStore.player.currPlaylist.created_by) {
        throw { msg: 'Only the owner of this playlist can edit it.' };
      }
      const playlistUpdated = await playlistService.update(playlistToUpdate);
      playlistStore.updatePlaylist(playlistUpdated);
      history.push(`/main/${playlistUpdated.name}=${playlistUpdated._id}`);
      userMsgStore.alert({
        type: 'success',
        msg: 'Playlist updated successfully.',
      });
    } catch (err) {
      console.error('Error, PlaylistUpdate.tsx -> function: :', err.msg);
      userMsgStore.alert({
        type: 'error',
        msg: err.msg,
      });
    }
    modalStore.toggleModal();
    setTimeout(() => {
      userMsgStore.clearAlert();
    }, 3000);
  };
  return (
    <PlaylistUpdateForm
      onSubmit={(ev) => {
        ev.preventDefault();
        if (isImgUploading) return;
        onUpdatePlaylist(playlistToUpdate);
      }}
    >
      <div>
        <PlaylistUpdateImgLabel htmlFor="imgUpload">
          {isImgUploading ? (
            <Loader loader={localImgService.defaultLoaderDark} size="25px" />
          ) : (
            <Svg size="25px">
              <FiUpload />
            </Svg>
          )}
          <Text type="p">Upload Playlist Image</Text>
        </PlaylistUpdateImgLabel>
        <input
          onChange={uploadImg}
          name="img"
          id="imgUpload"
          type="file"
          placeholder="playlist img"
          hidden
        />
      </div>
      <img style={{ width: '50px', height: '50px' }} src={DEFAULT_IMG} alt="" />
      <input
        onChange={onUpdatePlaylistInp}
        defaultValue={DEFAULT_NAME}
        name="name"
        type="text"
        placeholder="playlist name"
      />
      <select
        defaultValue={DEFAULT_GENRE}
        onChange={onUpdatePlaylistSelect}
        name="genre"
        id=""
      >
        {genreService.getGenreList().map((genre, idx) => {
          return (
            <option key={idx} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>

      <input
        onChange={onUpdatePlaylistInp}
        defaultValue={DEFAULT_DESCRIPTION}
        name="description"
        type="text"
        placeholder="playlist description"
      />
      <button>Update</button>
    </PlaylistUpdateForm>
  );
};
