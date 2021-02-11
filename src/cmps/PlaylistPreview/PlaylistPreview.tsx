import React from 'react';
import { Link } from 'react-router-dom';

// Types
import { PlaylistType } from '../../types/Playlist';
// Icons
import { FaRegPlayCircle } from 'react-icons/fa';
//Styles
import {
  PlaylistPreviewContainer,
  CardTopContainer,
  CardBottomContainer,
} from './PlaylistPreview.styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Svg } from '../../aux-cmps/Svg/Svg';

interface PlaylistPreviewProps {
  playlist: PlaylistType;
}
export const PlaylistPreview: React.FC<PlaylistPreviewProps> = ({
  playlist,
}) => {
  const _prettyUrl = (name: string | undefined): string => {
    let prettyUrl = name!.replace(/\s/g, '_');
    return prettyUrl.replace(/[^a-zA-Z0-9-_]/g, '');
  };
  return (
    <PlaylistPreviewContainer data-augmented-ui="tr-clip bl-clip border">
      <Link to={`/main/${_prettyUrl(playlist.name)}=${playlist._id}`}>
        <CardTopContainer src={playlist.img}></CardTopContainer>
        <CardBottomContainer>
          <Text type="p" bold={true} size="1.2rem" color="blueMain">
            {playlist.name}
          </Text>
          <Svg size="1.5rem" color="blueMain">
            <FaRegPlayCircle />
          </Svg>
        </CardBottomContainer>
      </Link>
    </PlaylistPreviewContainer>
  );
};
