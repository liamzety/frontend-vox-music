import { Fade } from '@material-ui/core';
import React from 'react';

// Styles
import { ScreenWrapperStyle } from './screenWrapper-styles';

interface ScreenWrapperProps {
  cb: (ev: any) => void;
  index: string;
  fade: boolean;
  darkenBg?: boolean;
}
export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  cb,
  index,
  fade,
  darkenBg = true,
}) => {
  return (
    <Fade in={fade}>
      <ScreenWrapperStyle
        index={index}
        darkenBg={darkenBg}
        onClick={cb}
      ></ScreenWrapperStyle>
    </Fade>
  );
};
