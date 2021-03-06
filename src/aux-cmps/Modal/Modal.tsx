import React from 'react';
import { Fade } from '@material-ui/core';
// Store
import { useStore } from '../../store/StoreContext';
// Styles
import { ModalStyles } from './Modal.styles';
// Cmps
import { ScreenWrapper } from '../ScreenWrapper/ScreenWrapper';
import { PlaylistAdd } from '../../cmps/PlaylistAdd/PlaylistAdd';
import { PlaylistUpdate } from '../../cmps/PlaylistUpdate/PlaylistUpdate';

interface ModalProps {
  className?: string;
  type: string;
  closeCb: () => void;
}
export const Modal: React.FC<ModalProps> = ({ className, type, closeCb }) => {
  const { modalStore } = useStore();

  const GetModal = () => {
    switch (type) {
      case 'addPlaylist':
        return <PlaylistAdd />;
      case 'updatePlaylist':
        return <PlaylistUpdate />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Fade in={modalStore.modal.isOn}>
        <ModalStyles
          className={className}
          data-augmented-ui=" tl-2-clip-y tr-2-clip-y br-2-clip-y bl-2-clip-y border"
        >
          <GetModal />
        </ModalStyles>
      </Fade>
      <ScreenWrapper
        fade={modalStore.modal.isOn}
        index="10"
        darkenBg={true}
        onClick={closeCb}
      />
    </>
  );
};
