import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Store
import { observer } from 'mobx-react';
import { useStore } from '../../store/StoreContext';
// Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi';
// Styles
import {
  ImgThumbnail,
  Container,
  CreatedByContainer,
} from './MainHeader.styles';
import { MenuItemSpan } from '../../aux-cmps/Menu/Menu.styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Button } from '../../aux-cmps/Button/Button';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Menu } from '../../aux-cmps/Menu/Menu';
import { userService } from '../../services/userService';
import { UserProfileImg } from '../../assets/style/main';

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
    const [userDetails, setUserDetails] = useState({
      name: '',
      profile_img: '',
    });
    useEffect(() => {
      getUserDetials();
    }, [currPlaylist.created_by]);
    const getUserDetials = async () => {
      if (!currPlaylist.created_by) return;
      setUserDetails(await userService.getLoggedUser(currPlaylist.created_by));
    };
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
                      onClick={() => {
                        setIsPlaylistMenu(!isPlaylistMenu);
                      }}
                      pointer={true}
                      size="4rem"
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
                      <MenuItemSpan
                        cb={() => {
                          setIsPlaylistMenu(!isPlaylistMenu);
                          onUpdatePlaylist(currPlaylist._id!);
                        }}
                      >
                        Edit
                      </MenuItemSpan>
                      <MenuItemSpan
                        cb={() => {
                          onRemovePlaylist(currPlaylist._id!);
                        }}
                      >
                        Delete
                      </MenuItemSpan>
                    </Menu>
                  </div>
                </div>
                <Text type="h4">{currPlaylist.description}</Text>
              </div>
              <div className="flex space-between align-center">
                <div className="flex col">
                  <Text type="p">Genre: {currPlaylist.genre}</Text>
                  <CreatedByContainer
                    data-tooltip={userDetails.name}
                    className="test flex align-center"
                  >
                    <Text style={{ marginRight: '10px' }} type="p">
                      Created by:{' '}
                    </Text>
                    {userDetails.profile_img ? (
                      <UserProfileImg
                        src={userDetails.profile_img}
                        alt="user"
                      />
                    ) : (
                      <Text capitalize={true} type="p">
                        {' '}
                        {userDetails.name}
                      </Text>
                    )}
                  </CreatedByContainer>
                </div>
                {userStore.user.isSignedIn ? (
                  <div className="chat-btn-container flex align-center">
                    {!isChat && userTyping && (
                      <Text className="user-typing-txt flex " type="p">
                        {userTyping}{' '}
                        <span className="typing">is typing...</span>
                      </Text>
                    )}
                    <Button onClick={onToggleChat} size="small">
                      Chat_
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button size="small">Login To Chat_</Button>
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
