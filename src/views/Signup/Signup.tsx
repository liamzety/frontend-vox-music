import React, { useState, useEffect } from 'react';
// Styles
import { SignupContainer } from './signup-styles';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
import { userService } from '../../services/userService';

export const Signup: React.FC = observer(({ history }: any) => {
  const store = useStore();

  const [userCred, setUserCred] = useState({
    name: '',
    email: '',
    password: '',
    // imgUrl:''
  });
  useEffect(() => {
    if (store.user.isSignedIn) history.push('/');
  }, [history, store.user.isSignedIn]);
  const handleInput = (ev: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = ev.currentTarget;

    setUserCred((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      const user = await userService.signup(userCred);
      store.setUser(user);
    } catch (err) {
      store.alert(err);
      store.clearAlert();
      console.error(err.msg);
    }
  };
  return (
    <SignupContainer style={{ paddingTop: '200px' }}>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} name="name" type="text" />
        <input onChange={handleInput} name="email" type="text" />
        <input onChange={handleInput} name="password" type="password" />
        {/* <input name="imgUrl" type="text" /> */}
        <button>SUBMIT</button>
      </form>
    </SignupContainer>
  );
});
