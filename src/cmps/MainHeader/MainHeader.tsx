import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Store
import { observer } from 'mobx-react';
import { useStore } from '../../store/StoreContext';
// Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi';
// Styles
import { ImgThumbnail, Container } from './mainHeader-styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Button } from '../../aux-cmps/Button/Button';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Fade, Slide } from '@material-ui/core';
import { Menu } from '../../aux-cmps/Menu/Menu';

interface MainHeaderProps {
  onRemovePlaylist: (playlistId: string) => void;
  onUpdatePlaylist: (playlistId: string) => void;
  onToggleChat: () => void;
  userTyping: string;
  isChat: boolean;
}

export const MainHeader: React.FC<MainHeaderProps> = observer(
  ({
    onRemovePlaylist,
    onUpdatePlaylist,
    onToggleChat,
    userTyping,
    isChat,
  }) => {
    const [isPlaylistMenu, setIsPlaylistMenu] = useState(false);
    const {
      playerStore: { currPlaylist },
      userStore,
    } = useStore();
    const history = useHistory();

    return (
      <Container>
        <div className="outer-container flex">
          <ImgThumbnail data-augmented-ui="tl-clip t-rect-x tr-clip br-clip b-rect-x bl-clip border">
            <img src={currPlaylist.img} alt="thumbnail" />
          </ImgThumbnail>
          <div className="inner-container flex w100 space-between align-center">
            <div className="txt-container flex space-between col h100 w100">
              <div className="name-desc-container">
                <div className="playlist-header-container flex space-between align-center">
                  <Text type="h2">{currPlaylist.name}</Text>
                  <div className="playlist-actions-container flex col space-between relative">
                    <Svg
                      cb={() => {
                        setIsPlaylistMenu(!isPlaylistMenu);
                      }}
                      pointer={true}
                      size="4rem"
                      color="mainTxt"
                    >
                      <BiDotsHorizontalRounded />
                    </Svg>
                    <Menu
                      closeCb={() => {
                        setIsPlaylistMenu(!isPlaylistMenu);
                      }}
                      animation={{
                        type: 'fade',
                        in: isPlaylistMenu,
                      }}
                      top="40px"
                      right="0"
                    >
                      <span
                        onClick={() => {
                          history.push('/');
                          onRemovePlaylist(currPlaylist._id!);
                        }}
                      >
                        Delete
                      </span>
                      <span
                        onClick={() => {
                          setIsPlaylistMenu(!isPlaylistMenu);
                          onUpdatePlaylist(currPlaylist._id!);
                        }}
                      >
                        Update
                      </span>
                    </Menu>
                  </div>
                </div>
                <Text type="h4">{currPlaylist.description}</Text>
              </div>
              <div className="flex space-between align-center">
                <Text type="p">Genre: {currPlaylist.genre}</Text>
                {userStore.user.isSignedIn ? (
                  <div className="chat-btn-container flex align-center">
                    {!isChat && userTyping && (
                      <Text className="user-typing-txt flex " type="p">
                        {userTyping}{' '}
                        <span className="typing">is typing...</span>
                      </Text>
                    )}
                    <Button cb={onToggleChat} size="small" label="G01">
                      Chat
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button size="small" label="G01">
                      Login To Chat_
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
  }
);
