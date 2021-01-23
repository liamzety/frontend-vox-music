import React, { useEffect, useState, useRef, useCallback } from 'react';
// Store
import { observer } from 'mobx-react';
// Styles
import {
  BannerContainer,
  BannerContainerInner,
  BannerWallpaper,
  BannerWallpaperContainer,
} from './banner-styles';
// Imgs
import wallpaper1 from '../../assets/img/wallpaper/wallpaper1.jpg';
import wallpaper2 from '../../assets/img/wallpaper/wallpaper2.jpg';
import wallpaper3 from '../../assets/img/wallpaper/wallpaper3.jpg';
import wallpaper4 from '../../assets/img/wallpaper/wallpaper4.jpg';
import wallpaper5 from '../../assets/img/wallpaper/wallpaper5.jpg';
import wallpaper6 from '../../assets/img/wallpaper/wallpaper6.jpg';
// Types
import { PlaylistType } from '../../types/Playlist';
// Cmps
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';
import { Loader } from '../Loader/Loader';

interface BannerProps {
  onHandleScroll: () => void;
  playlists: PlaylistType[];
}
export const Banner: React.FC<BannerProps> = observer(
  ({ onHandleScroll, playlists }) => {
    const [currImg, setCurrImg] = useState(1);

    const wallpapers = [
      wallpaper1,
      wallpaper2,
      wallpaper3,
      wallpaper4,
      wallpaper5,
      wallpaper6,
    ];
    const imgInterval = useRef(null);
    const setImgInterval = useCallback(() => {
      imgInterval.current = setInterval(() => {
        setCurrImg((prevState) => {
          if (prevState === wallpapers.length) return 1;
          return prevState + 1;
        });
      }, 7000);
    }, [wallpapers.length]);
    useEffect(() => {
      setImgInterval();
      return () => {
        clearInterval(imgInterval.current);
      };
    }, [setImgInterval]);

    return (
      <BannerContainer>
        <BannerContainerInner className="container-x">
          <BannerContainerInner>
            <Text type="banner-title">Vox Music</Text>
            <Text type="banner-sub-title">Immerse Youself.</Text>
          </BannerContainerInner>
          <Button label="r25" cb={onHandleScroll} size="large">
            {playlists.length === 0 ? (
              <Loader size="50%" />
            ) : (
              'Start Listening_'
            )}
          </Button>
        </BannerContainerInner>
        <BannerWallpaperContainer>
          {wallpapers.map((src, idx) => (
            <BannerWallpaper
              key={idx}
              className="absolute w100 h100"
              opacity={currImg === idx + 1 ? '1' : '0'}
              src={src}
              alt="wallpaper"
            />
          ))}
        </BannerWallpaperContainer>
      </BannerContainer>
    );
  }
);
