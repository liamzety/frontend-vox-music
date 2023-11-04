import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Fade, Slide } from '@material-ui/core';
import { Resizable } from 're-resizable';
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
import { RiPlayListFill, RiFullscreenExitFill } from 'react-icons/ri';
import { MdOndemandVideo } from 'react-icons/md';
import { FaRegWindowMinimize } from 'react-icons/fa';
import { FcMusic } from 'react-icons/fc';
// Styles
import {
  PlayerContainer,
  PlayerWrapper,
  PlayerPlaylistImg,
  PlayerRightColumn,
  PlayerDurationContainer,
  PlayerLeftColumn,
  BackgroundWrapper,
  PlayerMini,
  SvgWrapper,
} from './Player.styles';
// Cmps
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Text } from '../../aux-cmps/Text/Text';
import { Loader } from '../Loader/Loader';

export const Player: React.FC = observer(() => {
  const { playerStore, themeStore } = useStore();
  const { player } = playerStore;

  const reactPlayerRef = useRef(null);
  const history = useHistory();
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

  const [isVideoMode, setIsVideoMode] = useState(false);
  const onToggleVideoMode = () => {
    setIsVideoMode(!isVideoMode);
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

  const _prettyUrl = (name: string | undefined): string => {
    let prettyUrl = name!.replace(/\s/g, '_');
    return prettyUrl.replace(/[^a-zA-Z0-9-_]/g, '');
  };

  const [height, setHeight] = React.useState(125);

  return (
    <PlayerWrapper className="relative">
      <Fade in={isVideoMode}>
        <div
          className={`video-player relative ${isVideoMode ? 'show' : 'hidden'}`}
        >
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
            width="100%"
            height="100%"
            controls={true}
          />
          <Svg
            color="playerSec"
            className="video-player-control video-player-prev"
            size="35px"
            onClick={() => {
              playerStore.handleNextPrevSong('prev');
            }}
          >
            <BiSkipPrevious />
          </Svg>
          <Svg
            color="playerSec"
            className="video-player-control video-player-next"
            size="35px"
            onClick={() => {
              playerStore.handleNextPrevSong('next');
            }}
          >
            <BiSkipNext />
          </Svg>
          <Svg
            color="playerSec"
            className="video-player-control video-player-return"
            size="20px"
            onClick={() => {
              onToggleVideoMode();
            }}
          >
            <FaRegWindowMinimize />
          </Svg>
        </div>
      </Fade>
      <PlayerMini
        className={
          !player.currPlaylist.currSong.songUrl || player.isOn ? 'hide' : ''
        }
        onClick={() => {
          playerStore.setPlayer({ isOn: true });
        }}
      >
        <Svg size="40px">
          <FcMusic />
        </Svg>
      </PlayerMini>
      <Slide direction="up" in={player.isOn} mountOnEnter unmountOnExit>
        <PlayerContainer
          className={player.isOn ? '' : 'hide'}
          data-augmented-ui="tl-clip-x t-clip-x tr-clip-x"
        >
          <SvgWrapper>
            <Svg
              data-tooltip="Return to current playlist"
              size="25px"
              onClick={() => {
                history.push(
                  `/main/${_prettyUrl(player.currPlaylist.name)}=${
                    player.currPlaylist._id
                  }`
                );
              }}
            >
              <RiPlayListFill />
            </Svg>
          </SvgWrapper>

          <SvgWrapper className="video-mode">
            <Svg
              data-tooltip="Video mode"
              size="25px"
              onClick={() => {
                onToggleVideoMode();
              }}
            >
              <MdOndemandVideo />
            </Svg>
          </SvgWrapper>

          <SvgWrapper
            className="minimize-player"
            onClick={() => {
              playerStore.setPlayer({ isOn: false });
            }}
          >
            <Svg size="25px">
              <FaRegWindowMinimize />
            </Svg>
          </SvgWrapper>

          <BackgroundWrapper isPlaying={player.isPlaying} />
          <Resizable
            size={{ width: '100%', height }}
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
              <Text
                color={themeStore.theme === 'light' ? 'pinkMain' : 'yellowMain'}
                type="h3"
                size="1.2rem"
              >
                {player.currPlaylist.currSong &&
                  player.currPlaylist.currSong.title}
              </Text>
            </PlayerLeftColumn>
            <PlayerRightColumn>
              <PlayerDurationContainer className="duration-container">
                <Text
                  color={
                    themeStore.theme === 'light' ? 'pinkMain' : 'yellowMain'
                  }
                  type="h4"
                  size="1.15rem"
                >
                  {_getFormattedMinutes(player.time)}
                </Text>
                <input
                  data-augmented-ui="border"
                  className="duration-input"
                  onChange={handleSongTime}
                  type="range"
                  value={player.time}
                  min="0"
                  max={player.duration}
                  step="1"
                />
                <Text
                  color={
                    themeStore.theme === 'light' ? 'pinkMain' : 'yellowMain'
                  }
                  type="h4"
                  size="1.15rem"
                >
                  {_getFormattedMinutes(player.duration)}
                </Text>
              </PlayerDurationContainer>
              <div className="controls-container flex align-center">
                <Svg
                  onClick={() => {
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
                  onClick={togglePlay}
                  pointer={true}
                  color="playerSec"
                >
                  {getPlayIcon()}
                </Svg>

                <Svg
                  onClick={() => {
                    playerStore.handleNextPrevSong('next');
                  }}
                  size="40px"
                  pointer={true}
                  color="playerSec"
                >
                  <BiSkipNext />
                </Svg>
                <Svg
                  onClick={toggleSongMute}
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
