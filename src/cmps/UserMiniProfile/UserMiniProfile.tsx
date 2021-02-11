import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { UserMiniProfileStyles, UnknownUser } from './UserMiniProfile.styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { useStore } from '../../store/StoreContext';

export interface UserMiniProfileProps {
  profile_img: string;
  initials: string;
  isSignedIn: boolean;
  onClick: () => void;
}
export const UserMiniProfile: React.FC<UserMiniProfileProps> = ({
  profile_img,
  initials,
  isSignedIn,
  onClick,
}) => {
  const { themeStore } = useStore();
  if (!isSignedIn) {
    return (
      <Link to={`/login`}>
        <UnknownUser />
      </Link>
    );
  }
  return (
    <UserMiniProfileStyles onClick={onClick}>
      {profile_img ? (
        <img src={profile_img} alt="Profile" />
      ) : (
        <Text
          color={themeStore.theme === 'dark' ? 'yellowMain' : 'pinkMain'}
          bold={true}
          size="1.2rem"
          type="p"
        >
          {initials}
        </Text>
      )}
    </UserMiniProfileStyles>
  );
};
