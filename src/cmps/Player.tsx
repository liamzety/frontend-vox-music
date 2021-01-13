import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { PlayerType } from '../types/Player';

interface PlayerProps {
  currPlayingUrl: string;
}
export function Player({ currPlayingUrl }: PlayerProps) {
  const [player, setPlayer] = useState<PlayerType>({
    isPlaying: true,
    duration: null,
    time: 0,
  });
  const reactPlayerRef = useRef(null);

  const togglePlay = () => {
    setPlayer((prevState) => {
      return {
        ...prevState,
        isPlaying: !prevState.isPlaying,
      };
    });
  };
  //  Update player.duration when a song is loaded
  const setDuration = (duration: number) => {
    setPlayer((prevState) => {
      return {
        ...prevState,
        duration,
      };
    });
  };
  // Update player.time every second
  const handleProgress = (progressData: any) => {
    setPlayer((prevState) => {
      return {
        ...prevState,
        time: progressData.playedSeconds,
      };
    });
  };
  // When user slides and selects different timelapse
  const handleSongTime = (ev: any) => {
    const timestamp = +ev.currentTarget.value;
    reactPlayerRef.current.seekTo(timestamp, 'seconds');
    setPlayer((prevState) => {
      return {
        ...prevState,
        time: timestamp,
      };
    });
  };
  const _getFormattedMinutes = (duration: number) => {
    if (!duration) return '0:00';
    if (duration >= 28144451) return 'Live';

    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    var ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  };

  return (
    <div className={`player ${currPlayingUrl ? '' : 'hidden'}`}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${currPlayingUrl}`}
        playing={player.isPlaying}
        onDuration={setDuration}
        onProgress={handleProgress}
        className="hidden"
        ref={reactPlayerRef}
      />

      <div className="player flex space-between align-center fixed">
        <button onClick={togglePlay}>Play</button>
        <input
          onChange={handleSongTime}
          type="range"
          value={player.time}
          min="0"
          max={player.duration}
        />
        <p>
          {_getFormattedMinutes(player.time)} /{' '}
          {_getFormattedMinutes(player.duration)}
        </p>
      </div>
    </div>
  );
}
