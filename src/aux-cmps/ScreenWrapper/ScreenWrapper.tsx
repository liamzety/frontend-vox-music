import React from 'react';
import { useStore } from '../../store/StoreContext';
import { ScreenWrapperStyle } from './screenWrapper-styles';

export const ScreenWrapper: React.FC = () => {
  const store = useStore();
  return <ScreenWrapperStyle onClick={store.toggleModal}></ScreenWrapperStyle>;
};
