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
import { Select } from '../../aux-cmps/Select/Select';
import { Button } from '../../aux-cmps/Button/Button';

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
    console.log('here', targetValue);
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
      data-augmented-ui-reset
      onSubmit={(ev) => {
        ev.preventDefault();
        if (isImgUploading) return;
        onAddPlaylist(playlistToAdd);
      }}
    >
      <PlaylistAddImgLabel data-augmented-ui="tl-clip t-rect-x tr-clip br-clip b-rect-x bl-clip border">
        <img
          className="w100 h100"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAQlBMVEVjaWyhqKyjqq5fZWiHjZFscnWSmZ2PlppvdXiXnqKepalyeHuboqZobnFkam2lrLCCiIx8goVcYmWLkpZ3fYCCiYx2THbQAAACXElEQVR4nO3a2W6DMBCFYRhjE7aYre//qvVClqa5gFZRpMz/XTS0UAkfeRlDigIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXs/8xbtv+sVqd1x1fvddv5IZfXmcn959369kKvlDJlJ98uiJmfT1Mb2CTJp98+o8z/mg0ZDJrgu7ylVdioJMssGJlCKuK8hkc27yVCztQCbbVUuIRFwffjaGTJJzCsPEaPxAJska5hIbPs9hGZ7IJJmkjBPJNpWQSWRDP5lMYdYwq3Qq+4mxjy02fVm2k13Dh9e57jifB8qdMa47oUIJuz+V604d228fLhu3+mQpFPaToc6tP91aHR8hmcm1vm2m+FdtmQxtiKQNmbTdpdmDc2koDaet8+jKxNgQhzRDLFv7LRTTizQ/hpKqTEwXpwxXFHMcQLmnpLK+lLuhpCqTayQhlGULxUz52aRfbykoysSMl4Ul/rLkOcXGUZR2gNM1Bj2ZzF+hR/jqeiLNKTZUabKaKpyS8ZKDnkyWrSK7nlnk+jw6jSBfz/mMlkzyE5L1vqlzDqVPM20MRep8Qksm9a9ILjltx3mVTu+6lGTi5GfpuqlE1svxKZcuhZJMzr2UUtonp7vT7Xjo41CySvaAcXFxj1vhJ/rcmzRkkiq1XW/F80SsI5NcvO64OoWi4X1xKF7nvdd/iY536O2yv4X5uxmfn0lzpIHxObWGTI79RyhUFGRyOsSqWHfkGA1jh+9uPbDiD3YTEd8+2wd8kMEet2MfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9g1TphgDD8TW3wAAAABJRU5ErkJggg=="
          alt=""
        />
      </PlaylistAddImgLabel>

      {/* <div>
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
      </div> */}

      <Input
        onChange={onAddPlaylistInp}
        name="name"
        type="text"
        placeholder="playlist name"
      />
      <Input
        onChange={onAddPlaylistInp}
        name="description"
        type="text"
        placeholder="playlist description"
      />
      <Select
        options={genreService.getGenreList()}
        onChange={onAddPlaylistSelect}
        name="genre"
        id=""
      />
      <Button>Create Playlist</Button>
    </PlaylistAddForm>
  );
};
