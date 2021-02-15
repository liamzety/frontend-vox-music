import React, { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
// Store
import { useStore } from '../../store/StoreContext';
// Services
import { youtubeService } from '../../services/youtubeService';
import { storageService } from '../../services/storageService';
// Icons
import { BsFillMicFill } from 'react-icons/bs';
// Styles
import { ListeningOverlay, SongSearchContainer } from './SongSearch.styles';
// Cmps
import { AutoSuggest } from '../AutoSuggest/AutoSuggest';
import { Input } from '../../aux-cmps/Input/Input';
import { Svg } from '../../aux-cmps/Svg/Svg';

interface songSearchProps {
  onAddSong: (suggestion: any) => void;
}
export const SongSearch: React.FC<songSearchProps> = ({ onAddSong }) => {
  const [autoSuggest, setAutoSuggest] = useState({
    isOn: false,
    suggestions: [],
  });
  const { userMsgStore } = useStore();
  const { listening, finalTranscript } = useSpeechRecognition();

  const inputRef = React.useRef(null);
  useEffect(() => {
    inputRef.current.value = finalTranscript;
    handler(inputRef.current.value);
  }, [finalTranscript]);
  const handler = useCallback(
    debounce(async (songToSuggest: string) => {
      try {
        /*** USE THIS FOR DEVELOPMENT (contains entries with fallbackQuery constant (at storageService))  ***/
        // let suggestions: any;
        // if (storageService.load('fallbackQuery')) {
        //   suggestions = storageService.load('fallbackQuery');
        // } else {
        //   await storageService.save('fallbackQuery');
        //   suggestions = storageService.load('fallbackQuery');
        // }
        /*** OPTIONAL -->  (save to storage new search words)    ***/
        // storageService.save('cyberpunk' /* change here */, await getVideos('cyberpunk' /* change here */));

        /*** USE THIS FOR PRODUCTION (enables youtube queries)  ***/
        const suggestions = await getVideos(songToSuggest);

        setAutoSuggest((prevState: any) => {
          return {
            ...prevState,
            isOn: !songToSuggest ? false : true,
            suggestions,
          };
        });
      } catch (err) {
        if (err.response.status === 403) {
          console.log('Error (Probably exceeded YouTube Points...)', err);
          userMsgStore.alert({
            type: 'alert',
            msg: `Dear Recruiter/Developer - YouTube API's Points have run out for the day.
              </br>
              Unfortunately it will only replenish tomorrow.
              </br>
              As this is a demo site for recruiters i did not purchase a pack.
              </br>
              This message will close in 20 seconds.`,
          });
          setTimeout(() => {
            userMsgStore.clearAlert();
          }, 20000);
        }
      }
    }, 800),
    []
  );
  const closeAutoSuggest = () => {
    setAutoSuggest(() => ({ isOn: false, suggestions: [] }));
  };
  // Fires when a user searches for songs to add
  async function onAddSongInp(ev: React.FormEvent<HTMLInputElement>) {
    const songToSuggest = ev.currentTarget.value;
    handler(songToSuggest);
  }
  const getVideos = async (query: string) => {
    const res = await youtubeService.get(query);
    return res;
  };
  return (
    <SongSearchContainer>
      <Input
        domRef={inputRef}
        onChange={onAddSongInp}
        name="search"
        type="text"
        placeholder="song search"
      />

      {SpeechRecognition.browserSupportsSpeechRecognition() && (
        <Svg
          pointer={true}
          size="25px"
          onClick={() => {
            SpeechRecognition.startListening();
          }}
        >
          <BsFillMicFill />
        </Svg>
      )}
      {SpeechRecognition.browserSupportsSpeechRecognition() && listening && (
        <ListeningOverlay>listening</ListeningOverlay>
      )}
      <AutoSuggest
        closeAutoSuggest={closeAutoSuggest}
        isOn={autoSuggest.isOn}
        onAddSong={onAddSong}
        suggestions={autoSuggest.suggestions}
      />
    </SongSearchContainer>
  );
};
