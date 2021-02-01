import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { UserMiniProfileStyles, UnknownUser } from './userMiniProfile-styles';

// Cmps
import { Text } from '../Text/Text';

export interface UserMiniProfileProps {
  imgUrl: string;
  initials: string;
  isSignedIn: boolean;
  onClick?: () => void;
}
export const UserMiniProfile: React.FC<UserMiniProfileProps> = ({
  imgUrl,
  initials,
  isSignedIn,
  onClick,
}) => {
  if (!isSignedIn) {
    return (
      <Link to={`/login`}>
        <UnknownUser />
      </Link>
    );
  }
  return (
    <UserMiniProfileStyles onClick={onClick}>
      {imgUrl ? (
        <img src={imgUrl} alt="Profile" />
      ) : (
        <Text bold={true} size="1.2rem" type="p">
          {initials}
        </Text>
      )}
    </UserMiniProfileStyles>
  );
};
