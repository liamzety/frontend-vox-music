import React from 'react';
import { useHistory } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
// Services
import { playlistService } from '../../services/playlistService';
// Types
import { PlaylistType } from '../../types/Playlist';
// Cmps
import { PlaylistAdd } from '../PlaylistAdd/PlaylistAdd';
// Styles
import { PlaylistAddModalStyles } from './playlistAddModal-styles';
import { Fade } from '@material-ui/core';

interface PlaylistAddModal {
  fade: boolean;
}
export const PlaylistAddModal: React.FC<PlaylistAddModal> = ({ fade }) => {
  const { playlistStore, modalStore, userMsgStore } = useStore();
  const history = useHistory();

  async function onAddPlaylist(playlistToAdd: PlaylistType): Promise<void> {
    const playlistAdded = await playlistService.add(playlistToAdd);
    playlistStore.addPlaylist(playlistAdded);
    if (history.location.pathname !== '/') {
      history.push(`/main/${playlistAdded.title}=${playlistAdded._id}`);
    }
    modalStore.toggleModal();
    userMsgStore.alert({
      type: 'success',
      msg: 'Playlist added successfully.',
    });
    userMsgStore.clearAlert();
  }
  return (
    <Fade in={fade}>
      <PlaylistAddModalStyles data-augmented-ui=" tr-2-clip-xy b-clip-x border">
        <PlaylistAdd onAddPlaylist={onAddPlaylist} />
      </PlaylistAddModalStyles>
    </Fade>
  );
};
