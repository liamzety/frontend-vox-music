import React, { useState, useEffect, useCallback } from 'react';
// Styles
import { MenuStyles, MenuItem } from './menu-styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Fade } from '@material-ui/core';

interface MenuProps {
  children: any;
  fade: boolean;
}
export const Menu: React.FC<MenuProps> = ({ children, fade }) => {
  const finalFields = React.Children.toArray(children);
  return (
    <Fade in={fade}>
      <MenuStyles>
        {finalFields.map((child, idx) => {
          return (
            <MenuItem key={idx}>
              <Text type="p" bold={true}>
                {child}
              </Text>
            </MenuItem>
          );
        })}
      </MenuStyles>
    </Fade>
  );
};
