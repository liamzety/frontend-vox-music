import React from 'react';
// Styles
import { UserMiniProfileStyles, UserInitials } from './userMiniProfile-styles';
import { Text } from '../Text/Text';

interface UserMiniProfileProps {
  imgUrl: string;
  initials: string;
}
export const UserMiniProfile: React.FC<UserMiniProfileProps> = ({
  imgUrl,
  initials,
}) => {
  return (
    <UserMiniProfileStyles>
      {imgUrl ? (
        <img src={imgUrl} alt="Profile" />
      ) : (
        <UserInitials>
          <Text bold={true} size="1.2rem" type="p">
            {initials}
          </Text>
        </UserInitials>
      )}
    </UserMiniProfileStyles>
  );
};
