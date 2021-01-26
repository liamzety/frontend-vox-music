import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Icons
import {
  BiVolumeMute,
  BiVolumeLow,
  BiVolumeFull,
  BiPlay,
  BiPause,
  BiSkipNext,
  BiSkipPrevious,
  BiDownArrow,
  BiUpArrow,
} from 'react-icons/bi';
// Styles
import {
  PlayerContainer,
  PlayerWrapper,
  PlayerPlaylistImg,
  PlayerRightColumn,
  PlayerDurationContainer,
  PlayerLeftColumn,
} from './player-styles';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Text } from '../../aux-cmps/Text/Text';
import { Slide } from '@material-ui/core';
interface PlayerProps {
  slide: boolean;
}
export const Player: React.FC<PlayerProps> = observer(({ slide }) => {
  const store = useStore();
  const { player } = store;
  const reactPlayerRef = useRef(null);
  const [song, setSong] = useState(null);
  useEffect(() => {
    setSong(player.currPlaylist.songs[player.idx]);
  }, [player.idx, song]);

  const togglePlay = () => {
    store.setPlayer({ isPlaying: !player.isPlaying });
  };
  //  Update player.duration when a song is loaded
  const setDuration = (duration: number) => {
    store.setPlayer({ duration });
  };
  // Update player.time every second
  const handleProgress = (progressData: any) => {
    store.setPlayer({ time: progressData.playedSeconds });
  };
  // When user slides and selects different timelapse
  const handleSongTime = (ev: React.FormEvent<HTMLInputElement>) => {
    const timestamp = +ev.currentTarget.value;
    reactPlayerRef.current.seekTo(timestamp, 'seconds');
    store.setPlayer({ time: timestamp });
  };
  // When user slides and selects different volume
  const handleSongVolume = (ev: React.FormEvent<HTMLInputElement>) => {
    const volume = +ev.currentTarget.value;

    store.setPlayer({ volume, lastVolume: volume });
  };
  // Toggle mute, if already muted - goes to the last volume b4 toggle,
  // if last volume was slided to 0 instead of a toggle then the toggle will make the new sound 0.5
  const toggleSongMute = () => {
    if (player.volume === 0) {
      if (player.lastVolume === 0) {
        store.setPlayer({ volume: 0.5 });
      } else {
        store.setPlayer({ volume: player.lastVolume });
      }
    } else {
      store.setPlayer({ volume: 0 });
    }
  };
  const getMuteIcon = () => {
    if (player.volume === 0) return <BiVolumeMute />;
    else if (player.volume >= 0.7) return <BiVolumeFull />;
    else if (player.volume < 0.7 && player.volume > 0) return <BiVolumeLow />;
    else return <BiVolumeMute />;
  };
  const getPlayIcon = () => {
    if (player.isPlaying) return <BiPause />;
    else return <BiPlay />;
  };
  const getPlayerToggleIcon = () => {
    if (isPlayerHidden) return <BiUpArrow />;
    else return <BiDownArrow />;
  };
  const [isPlayerHidden, setIsPlayerHidden] = useState(false);
  const togglePlayer = () => {
    setIsPlayerHidden(!isPlayerHidden);
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

  return (
    <PlayerWrapper
      isPlayerHidden={isPlayerHidden}
      className={`relative ${player.isOn ? '' : 'hidden'}`}
    >
      <Svg size="30px" className="toggle-player" cb={togglePlayer}>
        {getPlayerToggleIcon()}
      </Svg>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${player.songUrl}`}
        playing={player.isPlaying}
        onReady={() => {
          reactPlayerRef.current.seekTo(0, 'seconds');
        }}
        onDuration={setDuration}
        onProgress={handleProgress}
        volume={player.volume}
        ref={reactPlayerRef}
        hidden
      />
      <Slide direction="up" in={slide}>
        <PlayerContainer
          className={`${isPlayerHidden ? 'hide-player' : ''}`}
          data-augmented-ui="tl-clip-x t-clip-x tr-clip-x"
        >
          <PlayerLeftColumn>
            <PlayerPlaylistImg src={song && song.url} alt="" />
            <Text type="h3" size="1.5rem">
              {song && song.title}
            </Text>
          </PlayerLeftColumn>
          <PlayerRightColumn className="">
            <PlayerDurationContainer className="duration-container">
              <Text type="h4">{_getFormattedMinutes(player.time)}</Text>
              <input
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
                cb={store.handleNextPrevSong.bind({}, 'prev', player.idx)}
                size="40px"
                pointer={true}
              >
                <BiSkipPrevious />
              </Svg>

              <Svg size="40px" cb={togglePlay} pointer={true}>
                {getPlayIcon()}
              </Svg>

              <Svg
                cb={store.handleNextPrevSong.bind({}, 'next', player.idx)}
                size="40px"
                pointer={true}
              >
                <BiSkipNext />
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
              <Svg
                cb={toggleSongMute}
                className="mute-btn"
                size="30px"
                pointer={true}
              >
                {getMuteIcon()}
              </Svg>
            </div>
          </PlayerRightColumn>
        </PlayerContainer>
      </Slide>
    </PlayerWrapper>
  );
});
