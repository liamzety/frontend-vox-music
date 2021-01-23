import React from 'react';
import { useHistory } from 'react-router-dom';
import { playlistService } from '../../services/playlistService';
import { useStore } from '../../store/StoreContext';
import { PlaylistType } from '../../types/Playlist';
import { PlaylistAdd } from '../PlaylistAdd/PlaylistAdd';
import { PlaylistAddModalStyles } from './playlistAddModal-styles';

export const PlaylistAddModal: React.FC = () => {
  const store = useStore();
  const history = useHistory();

  async function onAddPlaylist(playlistToAdd: PlaylistType): Promise<void> {
    const playlistAdded = await playlistService.add(playlistToAdd);
    store.addPlaylist(playlistAdded);
    if (history.location.pathname !== '/') {
      history.push(`/main/${playlistAdded.title}=${playlistAdded._id}`);
    }
    store.toggleModal();
  }
  return (
    <PlaylistAddModalStyles data-augmented-ui=" tr-2-clip-xy b-clip-x border">
      <PlaylistAdd onAddPlaylist={onAddPlaylist} />
    </PlaylistAddModalStyles>
  );
};
