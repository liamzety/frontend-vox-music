import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Types
import { PlaylistType } from '../../types/Playlist';
import { Svg } from '../../aux-cmps/Svg/Svg';
// Icons
import { FaRegPlayCircle } from 'react-icons/fa';
//Styles
import {
  PlaylistPreviewContainer,
  CardTopContainer,
  CardBottomContainer,
} from './playlistPreview-styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';

interface PlaylistPreviewProps {
  playlist: PlaylistType;
}
export const PlaylistPreview: React.FC<PlaylistPreviewProps> = ({
  playlist,
}) => {
  const _prettyUrl = (name: string | undefined): string => {
    return name!.replace(/\s/g, '_');
  };

  return (
    <PlaylistPreviewContainer data-augmented-ui="tr-clip bl-clip border">
      <Link to={`/main/${_prettyUrl(playlist.name)}=${playlist._id}`}>
        <CardTopContainer src={playlist.img}></CardTopContainer>
        <CardBottomContainer>
          <Text type="p" bold={true} size="1.2rem" color="blueMain">
            {playlist.name}
          </Text>
          <Svg size="1.5rem">
            <FaRegPlayCircle />
          </Svg>
        </CardBottomContainer>
      </Link>
    </PlaylistPreviewContainer>
  );
};
