import React, { useState, useEffect } from 'react';
// Styles
import { SignupContainer } from './Signup.styles';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
import { userService } from '../../services/userService';
import { cloudinaryService } from '../../services/cloudinaryService';

export const Signup: React.FC = observer(({ history }: any) => {
  const { userStore, userMsgStore } = useStore();
  const [isImgUploading, setIsImgUploading] = useState<boolean>(false);

  const [userCred, setUserCred] = useState({
    name: '',
    email: '',
    password: '',
    profile_img: '',
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
    <SignupContainer style={{ paddingTop: '200px' }}>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} name="name" type="text" />
        <input onChange={handleInput} name="email" type="text" />
        <input onChange={handleInput} name="password" type="password" />
        <input onChange={uploadImg} name="profile_img" type="file" />
        <button>SUBMIT</button>
      </form>
    </SignupContainer>
  );
});
