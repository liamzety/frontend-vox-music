import React from 'react';
import { Slide } from '@material-ui/core';
import { Fade } from '@material-ui/core';
// Styles
import { MenuStyles, MenuItem } from './menu-styles';
// Cmps
import { Text } from '../Text/Text';
import { ScreenWrapper } from '../ScreenWrapper/ScreenWrapper';

interface MenuProps {
  children: any;
  animation: {
    type: string;
    in: boolean;
    direction?: 'down' | 'up' | 'left' | 'right';
  };
  position?: 'absolute' | 'fixed';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  hideBorderTop?: boolean;
  width?: string;
  center?: boolean;
  className?: string;
  closeCb?: () => void;
}
export const Menu: React.FC<MenuProps> = ({
  children,
  animation,
  position = 'absolute',
  top,
  right,
  bottom,
  left,
  hideBorderTop,
  width = '120px',
  center = true,
  className,
  closeCb,
}) => {
  const finalFields = React.Children.toArray(children);
  const AnimationWrapper = ({ children }: any) => {
    switch (animation.type) {
      case 'slide':
        return (
          <Slide direction="down" in={animation.in} mountOnEnter unmountOnExit>
            {children}
          </Slide>
        );

      case 'fade':
        return (
          <Fade in={animation.in} mountOnEnter unmountOnExit>
            {children}
          </Fade>
        );
    }
  };

  return (
    <>
      <AnimationWrapper>
        <MenuStyles
          position={position}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          width={width}
          hideBorderTop={hideBorderTop}
          className={className}
        >
          {finalFields.map((child, idx) => {
            return (
              <MenuItem key={idx} center={center}>
                <Text type="p" bold={true} color="yellowMain">
                  {child}
                </Text>
              </MenuItem>
            );
          })}
        </MenuStyles>
      </AnimationWrapper>
      <ScreenWrapper
        fade={animation.in}
        index="11"
        darkenBg={false}
        onClick={closeCb}
      />
    </>
  );
};
