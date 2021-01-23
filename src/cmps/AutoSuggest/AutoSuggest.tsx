import React from 'react';
// Services
import { regService } from '../../services/regService';

interface AutoSuggestProps {
  onAddSong: (suggestion: any) => void;
  suggestions: any;
}
export const AutoSuggest: React.FC<AutoSuggestProps> = ({
  suggestions,
  onAddSong,
}) => {
  return (
    <div>
      <ul>
        {suggestions.items.map((suggestion: any, idx: number) => {
          return (
            <li onClick={onAddSong.bind({}, suggestion)} key={idx}>
              {regService.replaceCharRef(suggestion.snippet.title)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
