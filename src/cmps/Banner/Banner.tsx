import React, { useEffect, useState, useRef, useCallback } from 'react';
// Store
import { observer } from 'mobx-react';
// Styles
import {
  BannerContainer,
  BannerLogo,
  BannerWallpaper,
  BannerWallpaperContainer,
  BannerTitleContainer,
} from './banner-styles';

// Types
import { PlaylistType } from '../../types/Playlist';
// Cmps
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';
import { Loader } from '../Loader/Loader';
import { localImgService } from '../../services/localImgService';
import { useStore } from '../../store/StoreContext';

interface BannerProps {
  onHandleScroll: () => void;
}
export const Banner: React.FC<BannerProps> = observer(({ onHandleScroll }) => {
  const { playlistStore } = useStore();
  const [currImg, setCurrImg] = useState(1);
  const imgInterval = useRef(null);
  const setImgInterval = useCallback(() => {
    imgInterval.current = setInterval(() => {
      setCurrImg((prevState) => {
        if (prevState === localImgService.wallpapers.length) return 1;
        return prevState + 1;
      });
    }, 7000);
  }, []);
  useEffect(() => {
    setImgInterval();
    return () => {
      clearInterval(imgInterval.current);
    };
  }, [setImgInterval]);
  return (
    <BannerContainer data-augmented-ui="br-clip-x b-clip-x bl-clip-x">
      <BannerTitleContainer className="container-x">
        <div className="banner-title-txt-container flex align-center justify-center col">
          <Text type="banner-title">
            Vo <BannerLogo src={localImgService.logoDark} />
            Music
          </Text>
          <Text type="banner-sub-title">Immerse Youself.</Text>
        </div>

        <Button onClick={onHandleScroll} size="large">
          {playlistStore.playlists.length === 0 ? (
            <Loader size="50%" />
          ) : (
            'Start Listening_'
          )}
        </Button>
      </BannerTitleContainer>
      <BannerWallpaperContainer>
        {localImgService.wallpapers.map((src, idx) => (
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
});
