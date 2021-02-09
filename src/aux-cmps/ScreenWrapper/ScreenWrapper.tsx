import { Fade } from '@material-ui/core';
import React from 'react';

// Styles
import { ScreenWrapperStyle } from './ScreenWrapper.styles';

interface ScreenWrapperProps {
  onClick: (ev: any) => void;
  index: string;
  fade: boolean;
  darkenBg?: boolean;
}
export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  onClick,
  index,
  fade,
  darkenBg = true,
}) => {
  return (
    <Fade in={fade}>
      <ScreenWrapperStyle
        index={index}
        darkenBg={darkenBg}
        onClick={onClick}
      ></ScreenWrapperStyle>
    </Fade>
  );
};
