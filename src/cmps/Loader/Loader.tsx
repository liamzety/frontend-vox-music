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
