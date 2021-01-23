import React from 'react';
// Imgs
import loader from '../../assets/img/loader.gif';
// Styles
import { LoaderStyle } from './loader-styles';

interface LoaderProps {
  position?: 'absolute' | 'fixed';
  size?: string;
}
export const Loader: React.FC<LoaderProps> = ({ position, size }) => {
  return (
    <LoaderStyle position={position} size={size}>
      <img src={loader} alt="Loading" />
    </LoaderStyle>
  );
};
