import React from 'react';
//Store
import { useStore } from '../../store/StoreContext';
// Styles
import { ScreenWrapperStyle } from './screenWrapper-styles';

export const ScreenWrapper: React.FC = () => {
  const store = useStore();
  return <ScreenWrapperStyle onClick={store.toggleModal}></ScreenWrapperStyle>;
};
