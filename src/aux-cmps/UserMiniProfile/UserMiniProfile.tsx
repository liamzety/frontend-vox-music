import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { UserMiniProfileStyles, UnknownUser } from './userMiniProfile-styles';

// Cmps
import { Text } from '../Text/Text';

interface UserMiniProfileProps {
  imgUrl: string;
  initials: string;
  isSignedIn: boolean;
}
export const UserMiniProfile: React.FC<UserMiniProfileProps> = ({
  imgUrl,
  initials,
  isSignedIn,
}) => {
  if (!isSignedIn)
    return (
      <Link to={`/login`}>
        <UnknownUser />
      </Link>
    );
  return (
    <UserMiniProfileStyles>
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
