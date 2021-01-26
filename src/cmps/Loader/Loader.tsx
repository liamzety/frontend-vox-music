import React from 'react';
// Services
import { localImgService } from '../../services/localImgService';
import { useStore } from '../../store/StoreContext';
// Styles
import { LoaderStyle } from './loader-styles';

interface LoaderProps {
  loader?: string;
  position?: 'absolute' | 'fixed';
  size?: string;
}
export const Loader: React.FC<LoaderProps> = ({ position, size, loader }) => {
  const store = useStore();
  if (!loader) {
    loader =
      store.theme === 'dark'
        ? localImgService.defaultLoaderDark
        : localImgService.defaultLoaderLight;
  }
  console.log('store.theme', store.theme);
  return (
    <LoaderStyle position={position} size={size}>
      <img src={loader} alt="Loading" />
    </LoaderStyle>
  );
};
