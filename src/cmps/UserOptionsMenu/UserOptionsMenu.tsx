import React, { useState, useEffect, useCallback } from 'react';
// Styles
import { MenuStyles, MenuItem } from './userOptionsMenu-styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Slide } from '@material-ui/core';

interface UserOptionsMenuProps {
  children: any;
  slide: boolean;
}
export const UserOptionsMenu: React.FC<UserOptionsMenuProps> = ({
  children,
  slide,
}) => {
  const finalFields = React.Children.toArray(children);
  return (
    <Slide direction="down" in={slide} mountOnEnter unmountOnExit>
      <MenuStyles>
        {finalFields.map((child, idx) => {
          return (
            <MenuItem key={idx}>
              <Text type="p" bold={true} color="yellowMain">
                {child}
              </Text>
            </MenuItem>
          );
        })}
      </MenuStyles>
    </Slide>
  );
};
