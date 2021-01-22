import React, { useState } from 'react';
import { useStore } from '../../store/StoreContext';
import { useObserver } from 'mobx-react';
import { LoginContainer } from './login-styles';

export const Login: React.FC = ({ history }: any) => {
  const store = useStore();
  if (store.user.isSignedIn) history.push('/');

  return useObserver(() => (
    <LoginContainer style={{ paddingTop: '200px' }}>Login</LoginContainer>
  ));
};
