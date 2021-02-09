/* eslint-disable no-throw-literal */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
// Types
import { PlaylistType } from '../../types/Playlist';
// Services
import { cloudinaryService } from '../../services/cloudinaryService';
import { genreService } from '../../services/genreService';
import { localImgService } from '../../services/localImgService';
import { playlistService } from '../../services/playlistService';
// Styles
import {
  PlaylistUpdateImgLabel,
  PlaylistUpdateForm,
} from './PlaylistUpdate.styles';
// Cmps
import { Loader } from '../Loader/Loader';
import { Input } from '../../aux-cmps/Input/Input';
import { Select } from '../../aux-cmps/Select/Select';
import { Button } from '../../aux-cmps/Button/Button';

export const PlaylistUpdate: React.FC = () => {
  const [isImgUploading, setIsImgUploading] = useState<boolean>(false);
  const {
    playerStore,
    playlistStore,
    modalStore,
    userMsgStore,
    userStore,
    themeStore,
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
  const onUpdatePlaylistInp = async (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.currentTarget;
    setPlaylistToUpdate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const onUpdatePlaylistSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const targetValue = event.currentTarget.value;
    setPlaylistToUpdate((prevState) => {
      return {
        ...prevState,
        genre: targetValue,
      };
    });
  };
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
        <PlaylistUpdateImgLabel data-augmented-ui="tl-clip t-rect-x tr-clip br-clip b-rect-x bl-clip border">
          {isImgUploading ? (
            <Loader
              loader={
                themeStore.theme === 'dark'
                  ? localImgService.defaultLoaderLight
                  : localImgService.defaultLoaderDark
              }
              size="55px"
            />
          ) : (
            <img
              className="w100 h100"
              src={
                playlistToUpdate.img === DEFAULT_IMG
                  ? DEFAULT_IMG
                  : playlistToUpdate.img
              }
              alt=""
            />
          )}

          <Input
            onChange={uploadImg}
            name="img"
            id="imgUpload"
            type="file"
            placeholder="playlist img"
            hidden
          />
        </PlaylistUpdateImgLabel>
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
        onChange={onUpdatePlaylistInp}
        defaultValue={DEFAULT_NAME}
        name="name"
        type="text"
        placeholder="playlist name"
      />

      <Input
        onChange={onUpdatePlaylistInp}
        defaultValue={DEFAULT_DESCRIPTION}
        name="description"
        type="text"
        placeholder="playlist description"
      />
      <Select
        defaultValue={DEFAULT_GENRE}
        onChange={onUpdatePlaylistSelect}
        name="genre"
        id=""
        options={genreService.getGenreList()}
      />
      <Button>Update Playlist_</Button>
    </PlaylistUpdateForm>
  );
};
