import React, { useState } from 'react';
import { youtubeService } from '../services/youtubeService';
import { AutoSuggest } from './AutoSuggest';

interface songSearchProps {
  onAddSong: (suggestion: any) => void;
}
export function SongSearch({ onAddSong }: songSearchProps) {
  const [songToSuggest, setSongToSuggest] = useState({
    name: '',
  });
  const [autoSuggest, setAutoSuggest] = useState({
    isOn: false,
    suggestions: [],
  });
  async function onAddSongInp(ev: React.FormEvent<HTMLInputElement>) {
    setSongToSuggest({ name: ev.currentTarget.value });

    /*** ----------USE THIS WHEN QUERIES ARE UP-----------  ***/
    // const suggestions = await getVideos(songToSuggest.name!);

    /*** ----------THIS IS WHEN YOUTUBE QUERIES RUN OUT FOR THE DAY!---------------- ***/
    const suggestions = {
      items: [{ id: { videoId: '1wYNFfgrXTI' }, snippet: { title: 'test' } }],
    };

    setAutoSuggest((prevState: any) => {
      return {
        ...prevState,
        isOn: true,
        suggestions,
      };
    });
  }
  const getVideos = async (query: string) => {
    const res = await youtubeService.get(query);
    return res;
  };
  return (
    <>
      <input
        onChange={onAddSongInp}
        name="search"
        type="text"
        placeholder="song search"
      />
      {autoSuggest.isOn && (
        <AutoSuggest
          onAddSong={onAddSong}
          suggestions={autoSuggest.suggestions}
        />
      )}
    </>
  );
}
