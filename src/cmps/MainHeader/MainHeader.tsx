import React from 'react';
import { Link } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
// Styles
import { ImgThumbnail, Container } from './mainHeader-styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Button } from '../../aux-cmps/Button/Button';

interface MainHeaderProps {
  onRemovePlaylist: (playlistId: string) => void;
  onToggleChat: () => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  onRemovePlaylist,
  onToggleChat,
}) => {
  const store = useStore();
  return (
    <Container>
      <div className="outer-container flex">
        <ImgThumbnail data-augmented-ui="tl-clip t-rect-x tr-clip br-clip b-rect-x bl-clip border">
          <img src={store.player.currPlaylist.img} alt="thumbnail" />
        </ImgThumbnail>
        <div className="inner-container flex w100 space-between align-center">
          <div className="txt-container flex space-between col h100 w100">
            <div className="name-desc-container">
              <div className="playlist-header-container flex space-between align-center">
                <Text type="h2">{store.player.currPlaylist.name}</Text>
                <div className="playlist-actions-container flex col space-between">
                  <Text type="h1">. . .</Text>
                  {/* <Link to={`/`}>
                    <button
                      onClick={() => {
                        onRemovePlaylist(store.player.currPlaylist._id!);
                      }}
                    >
                      Delete
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      // onRemovePlaylist(store.player.currPlaylist._id!);
                    }}
                  >
                    Update
                  </button> */}
                </div>
              </div>
              <Text type="h4">{store.player.currPlaylist.description}</Text>
            </div>
            <div className="flex space-between align-center">
              <Text type="p">Genre: {store.player.currPlaylist.genre}</Text>
              {store.user.isSignedIn ? (
                <Button cb={onToggleChat} size="small" label="G01">
                  Chat
                </Button>
              ) : (
                <Link to="/login">
                  <Button size="small" label="G01">
                    Login To Chat!
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};
