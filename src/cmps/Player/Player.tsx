import React, { JSXElementConstructor, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Services
import { localImgService } from '../../services/localImgService';
// Icons
import {
  BiVolumeMute,
  BiVolumeLow,
  BiVolumeFull,
  BiPlay,
  BiPause,
  BiSkipNext,
  BiSkipPrevious,
} from 'react-icons/bi';
// Styles
import {
  PlayerContainer,
  PlayerWrapper,
  PlayerPlaylistImg,
  PlayerRightColumn,
  PlayerDurationContainer,
  PlayerLeftColumn,
  BackgroundWrapper,
} from './player-styles';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Text } from '../../aux-cmps/Text/Text';
import { Slide } from '@material-ui/core';
import { Loader } from '../Loader/Loader';
import { Resizable } from 're-resizable';
// interface PlayerProps {
//   slide: boolean;
// }
export const Player: React.FC = observer(() => {
  const { playerStore } = useStore();
  const { player } = playerStore;

  const reactPlayerRef = useRef(null);
  const [isBuffering, setIsBuffering] = useState(true);

  const togglePlay = () => {
    playerStore.setPlayer({ isPlaying: !player.isPlaying });
  };
  //  Update player.duration when a song is loaded
  const setDuration = (duration: number) => {
    playerStore.setPlayer({ duration });
  };
  // Update player.time every second
  const handleProgress = (progressData: any) => {
    playerStore.setPlayer({ time: progressData.playedSeconds });
  };
  // When user slides and selects different timelapse
  const handleSongTime = (ev: React.FormEvent<HTMLInputElement>) => {
    const timestamp = +ev.currentTarget.value;
    reactPlayerRef.current.seekTo(timestamp, 'seconds');
    playerStore.setPlayer({ time: timestamp });
  };
  // When user slides and selects different volume
  const handleSongVolume = (ev: React.FormEvent<HTMLInputElement>) => {
    const volume = +ev.currentTarget.value;

    playerStore.setPlayer({ volume, lastVolume: volume });
  };
  // Toggle mute, if already muted - goes to the last volume b4 toggle,
  // if last volume was slided to 0 instead of a toggle then the toggle will make the new sound 0.5
  const toggleSongMute = () => {
    if (player.volume === 0) {
      if (!player.lastVolume) {
        playerStore.setPlayer({ volume: 0.5 });
      } else {
        playerStore.setPlayer({ volume: player.lastVolume });
      }
    } else {
      playerStore.setPlayer({ volume: 0 });
    }
  };
  const getMuteIcon = () => {
    if (player.volume === 0) return <BiVolumeMute />;
    else if (player.volume >= 0.7) return <BiVolumeFull />;
    else if (player.volume < 0.7 && player.volume > 0) return <BiVolumeLow />;
    else return <BiVolumeMute />;
  };
  const getPlayIcon = () => {
    if (isBuffering)
      return <Loader loader={localImgService.bufferLoader} size="40px" />;
    if (player.isPlaying) return <BiPause />;
    else return <BiPlay />;
  };

  const _getFormattedMinutes = (duration: number) => {
    if (!duration) return '0:00';
    if (duration >= 86400) return 'Live';

    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    let ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  };
  const [width, setWidth] = React.useState('100%');
  const [height, setHeight] = React.useState(125);

  return (
    <PlayerWrapper className={`relative ${player.isOn ? '' : 'hidden'}`}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${player.currPlaylist.currSong.songUrl}`}
        playing={player.isPlaying}
        onReady={() => {
          reactPlayerRef.current.seekTo(0, 'seconds');
        }}
        onBuffer={() => {
          setIsBuffering(true);
        }}
        onBufferEnd={() => {
          setIsBuffering(false);
        }}
        onEnded={() => {
          playerStore.handleNextPrevSong('next');
        }}
        onDuration={setDuration}
        onProgress={handleProgress}
        volume={player.volume}
        ref={reactPlayerRef}
        hidden
      />
      <Slide
        direction="up"
        in={playerStore.player.isOn}
        mountOnEnter
        unmountOnExit
      >
        <PlayerContainer data-augmented-ui="tl-clip-x t-clip-x tr-clip-x">
          <BackgroundWrapper isPlaying={player.isPlaying} />
          <Resizable
            size={{ width, height }}
            minHeight={15}
            maxHeight={125}
            className="resizeable"
            handleClasses={{ top: 'top-handle' }}
            enable={{
              top: true,
              right: false,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            onResizeStop={(e, direction, ref, d) => {
              setHeight(height + d.height);
            }}
          >
            <PlayerLeftColumn>
              <PlayerPlaylistImg
                src={
                  player.currPlaylist.currSong &&
                  player.currPlaylist.currSong.imgUrl
                }
                alt=""
              />
              <Text type="h3" size="1.5rem">
                {player.currPlaylist.currSong &&
                  player.currPlaylist.currSong.title}
              </Text>
            </PlayerLeftColumn>
            <PlayerRightColumn>
              <PlayerDurationContainer className="duration-container">
                <Text type="h4">{_getFormattedMinutes(player.time)}</Text>
                <input
                  data-augmented-ui="tl-clip  tr-clip br-clip  bl-clip border"
                  className="duration-input"
                  onChange={handleSongTime}
                  type="range"
                  value={player.time}
                  min="0"
                  max={player.duration}
                  step="1"
                />
                <Text type="h4">{_getFormattedMinutes(player.duration)}</Text>
              </PlayerDurationContainer>
              <div className="controls-container flex align-center">
                <Svg
                  cb={() => {
                    playerStore.handleNextPrevSong('prev');
                  }}
                  size="40px"
                  pointer={true}
                  color="playerSec"
                >
                  <BiSkipPrevious />
                </Svg>

                <Svg
                  size="40px"
                  cb={togglePlay}
                  pointer={true}
                  color="playerSec"
                >
                  {getPlayIcon()}
                </Svg>

                <Svg
                  cb={() => {
                    playerStore.handleNextPrevSong('next');
                  }}
                  size="40px"
                  pointer={true}
                  color="playerSec"
                >
                  <BiSkipNext />
                </Svg>
                <Svg
                  cb={toggleSongMute}
                  className="mute-btn"
                  size="30px"
                  pointer={true}
                  color="playerSec"
                >
                  {getMuteIcon()}
                </Svg>
                <input
                  className="volume-input"
                  onChange={handleSongVolume}
                  type="range"
                  value={player.volume}
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
            </PlayerRightColumn>
          </Resizable>
        </PlayerContainer>
      </Slide>
    </PlayerWrapper>
  );
});
