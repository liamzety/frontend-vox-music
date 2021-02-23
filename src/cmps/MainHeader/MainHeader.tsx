import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Store
import { observer } from 'mobx-react';
import { useStore } from '../../store/StoreContext';
// Services
import { userService } from '../../services/userService';
// Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
// Styles
import {
  ImgThumbnail,
  Container,
  CreatedByContainer,
} from './MainHeader.styles';
import { MenuItemSpan } from '../../aux-cmps/Menu/Menu.styles';
import { UserProfileImg } from '../../assets/style/main';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Button } from '../../aux-cmps/Button/Button';
import { Svg } from '../../aux-cmps/Svg/Svg';
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
      userMsgStore,
    } = useStore();
    const [userDetails, setUserDetails] = useState({
      name: '',
      profile_img: '',
    });
    const [isFavourite, setIsFavourite] = useState(false);
    useEffect(() => {
      getUserDetials();
      setIsFavourite(
        userStore.user.favouritePlaylists?.find(
          (playlist) => playlist._id === currPlaylist._id
        )
          ? true
          : false
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currPlaylist.created_by]);
    const getUserDetials = async () => {
      if (!currPlaylist.created_by) return;
      setUserDetails(await userService.getLoggedUser(currPlaylist.created_by));
    };

    const onFavouritePlaylist = async () => {
      if (!userStore.user._id) {
        userMsgStore.alert({ type: 'alert', msg: 'You need to be logged in.' });
        setTimeout(() => {
          userMsgStore.clearAlert();
        }, 4000);
      } else {
        setIsFavourite(true);
        try {
          await userService.favouritePlaylist(
            userStore.user._id,
            currPlaylist._id
          );
          userMsgStore.alert({
            type: 'success',
            msg: 'Playlist successfuly added to favourites.',
          });
          setTimeout(() => {
            userMsgStore.clearAlert();
          }, 4000);
        } catch (err) {
          userMsgStore.alert(err);
          setTimeout(() => {
            userMsgStore.clearAlert();
          }, 4000);
          console.error('Error, MainHeader.tsx -> function: :', err.message);
        }
      }
    };
    const onUnFavouritePlaylist = async () => {
      setIsFavourite(false);
      try {
        await userService.unFavouritePlaylist(
          userStore.user._id,
          currPlaylist._id
        );
      } catch (err) {
        userMsgStore.alert(err);
        setTimeout(() => {
          userMsgStore.clearAlert();
        }, 4000);
        console.error('Error, MainHeader.tsx -> function: :', err.message);
      }
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
                  <CreatedByContainer className="test flex align-center">
                    <Text style={{ marginRight: '10px' }} type="p">
                      Created by:
                    </Text>
                    {userDetails.profile_img ? (
                      <div data-tooltip={userDetails.name}>
                        <UserProfileImg
                          src={userDetails.profile_img}
                          alt="user"
                        />
                      </div>
                    ) : (
                      <Text capitalize={true} type="p">
                        {userDetails.name}
                      </Text>
                    )}
                  </CreatedByContainer>
                </div>
                <div className="chat-btn-container flex align-center">
                  {isFavourite ? (
                    <Svg
                      data-tooltip="Remove playlist from favourites"
                      color="favouriteIcon"
                      className="favourite-icon"
                      size="25px"
                      onClick={onUnFavouritePlaylist}
                      pointer={true}
                    >
                      <FaHeart />
                    </Svg>
                  ) : (
                    <Svg
                      data-tooltip="Add playlist to favourites"
                      className="favourite-icon"
                      size="25px"
                      onClick={onFavouritePlaylist}
                      pointer={true}
                    >
                      <FaRegHeart />
                    </Svg>
                  )}
                  {userStore.user.isSignedIn ? (
                    <>
                      {!isChat && userTyping && (
                        <Text className="user-typing-txt flex " type="p">
                          {userTyping}{' '}
                          <span className="typing">is typing...</span>
                        </Text>
                      )}
                      <Button onClick={onToggleChat} size="small">
                        Chat_
                      </Button>
                    </>
                  ) : (
                    <Link to="/login">
                      <Button size="small">Login To Chat_</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
);
