import React, { useState, useEffect } from 'react';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Services
import { userService } from '../../services/userService';
import { cloudinaryService } from '../../services/cloudinaryService';
import { localImgService } from '../../services/localImgService';
// Styles
import { UserAddImgLabel } from './Signup.styles';
import { ActionsContainer, LoginContainer } from '../Login/Login.styles';
// Cmps
import { Input } from '../../aux-cmps/Input/Input';
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';
import { Loader } from '../../cmps/Loader/Loader';

export const Signup: React.FC = observer(({ history }: any) => {
  const DEFAULT_IMG = localImgService.playlistImgPlaceholder;

  const { userStore, userMsgStore, themeStore } = useStore();
  const [isImgUploading, setIsImgUploading] = useState<boolean>(false);
  const [userCred, setUserCred] = useState({
    name: '',
    email: '',
    password: '',
    profile_img: DEFAULT_IMG,
  });

  useEffect(() => {
    if (userStore.user.isSignedIn) history.push('/');
  }, [history, userStore.user.isSignedIn]);
  const handleInput = (ev: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = ev.currentTarget;

    setUserCred((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const uploadImg = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    setIsImgUploading(true);
    const res = await cloudinaryService.uploadImg(ev.target.files[0]);
    setIsImgUploading(false);
    setUserCred((prevState) => {
      return {
        ...prevState,
        profile_img: res.url,
      };
    });
  };
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (isImgUploading) return;
    if (userCred.profile_img === DEFAULT_IMG) {
      userCred.profile_img = '';
    }
    try {
      const user = await userService.signup(userCred);
      userStore.setUser(user);
    } catch (err) {
      userMsgStore.alert(err);
      setTimeout(() => {
        userMsgStore.clearAlert();
      }, 3000);
      console.error(err.msg);
    }
  };
  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <div
          className="form-inner flex col space-evenly w100 h100"
          data-augmented-ui="tl-2-clip-y tr-2-clip-y br-2-clip-x bl-2-clip-x border"
        >
          <Text type="h2">Signup</Text>
          <UserAddImgLabel data-augmented-ui="tl-clip t-rect-x tr-clip br-clip b-rect-x bl-clip border">
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
                  userCred.profile_img === DEFAULT_IMG
                    ? localImgService.imgPlaceholder
                    : userCred.profile_img
                }
                alt=""
              />
            )}

            <Input onChange={uploadImg} name="profile_img" type="file" hidden />
          </UserAddImgLabel>
          <Input
            onChange={handleInput}
            placeholder="Full Name"
            name="name"
            type="text"
          />
          <Input
            onChange={handleInput}
            placeholder="Email"
            name="email"
            type="email"
          />
          <Input
            onChange={handleInput}
            placeholder="Password"
            name="password"
            type="password"
          />

          <ActionsContainer className="flex align-center col">
            <Button type="submit">Signup_</Button>
          </ActionsContainer>
        </div>
      </form>
      <form className="shadow-form">
        <div
          className="form-inner flex col space-evenly w100 h100"
          data-augmented-ui="tl-2-clip-y tr-2-clip-y br-2-clip-x bl-2-clip-x border"
        >
          <Text type="h2">Signup</Text>
          <UserAddImgLabel data-augmented-ui="tl-clip t-rect-x tr-clip br-clip b-rect-x bl-clip border">
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
                  userCred.profile_img === DEFAULT_IMG
                    ? localImgService.imgPlaceholder
                    : userCred.profile_img
                }
                alt=""
              />
            )}

            <Input onChange={() => {}} name="profile_img" type="file" hidden />
          </UserAddImgLabel>
          <Input onChange={() => {}} name="name" type="text" />
          <Input onChange={() => {}} name="email" type="text" />
          <Input onChange={() => {}} name="password" type="password" />

          <ActionsContainer className="flex align-center col">
            <Button type="submit">SIGNUP_</Button>
          </ActionsContainer>
        </div>
      </form>
    </LoginContainer>
  );
});
