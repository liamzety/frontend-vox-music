import React from 'react';
// Store
import { useStore } from '../../store/StoreContext';
// Services
import { localImgService } from '../../services/localImgService';
// Styles
import { LoaderStyle } from './Loader.styles';

interface LoaderProps {
  loader?: string;
  position?: 'absolute' | 'fixed';
  size?: string;
  className?: string;
}
export const Loader: React.FC<LoaderProps> = ({
  position,
  size,
  loader,
  className,
}) => {
  const { themeStore } = useStore();
  if (!loader) {
    loader =
      themeStore.theme === 'dark'
        ? localImgService.defaultLoaderDark
        : localImgService.defaultLoaderLight;
  }
  return (
    <LoaderStyle
      className={className ? className : ''}
      position={position}
      size={size}
    >
      <img src={loader} alt="Loading" />
    </LoaderStyle>
  );
};
