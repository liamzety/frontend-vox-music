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
  // const [chips, setChips] = useState(null);
  // useEffect(() => {
  //   setChips(getChipVariation);
  // }, []);

  // const getChipVariation = () => {
  //   const var1 = 'tl-2-clip-y br-2-clip-y bl-clip';
  //   const var2 = 'tl-2-clip-x tr-clip br-2-clip-x bl-clip';
  //   const var3 = 'tr-2-clip-x bl-2-clip-x';

  //   const options = [var1, var2, var3];

  //   const res = options[Math.floor(Math.random() * options.length)];
  //   return res;
  // };
  const _prettyUrl = (name: string | undefined): string => {
    return name!.replace(/\s/g, '_');
  };

  return (
    <PlaylistPreviewContainer data-augmented-ui="tr-clip bl-clip border">
      <Link to={`/main/${_prettyUrl(playlist.name)}=${playlist._id}`}>
        <CardTopContainer src={playlist.img}></CardTopContainer>
        <CardBottomContainer>
          <Text type="p" bold={true} size="1.2rem" color="chipTxt">
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
