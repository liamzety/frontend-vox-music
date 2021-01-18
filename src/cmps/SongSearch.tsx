import React, { useState } from 'react';
import { youtubeService } from '../services/youtubeService';
import { storageService } from '../services/storageService';
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
  // Fires when a user searches for songs to add
  async function onAddSongInp(ev: React.FormEvent<HTMLInputElement>) {
    setSongToSuggest({ name: ev.currentTarget.value });

    /*** USE THIS FOR DEVELOPMENT (contains entries for 'cyberpunk' search word only)  ***/
    let suggestions: any;
    if (storageService.load('cyberpunk')) {
      suggestions = storageService.load('cyberpunk');
    } else {
      await storageService.save('cyberpunk', await getVideos('cyberpunk'));
      suggestions = storageService.load();
    }

    /*** USE THIS FOR PRODUCTION (enables youtube queries)  ***/
    // const suggestions = await getVideos(songToSuggest.name!);

    /*** OPTIONAL -->  (save to storage new search words)    ***/
    // storageService.save('cyberpunk' /* change here */, await getVideos('cyberpunk' /* change here */));

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
