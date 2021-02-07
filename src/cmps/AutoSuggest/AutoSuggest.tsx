import React from 'react';
// Services
import { regService } from '../../services/regService';
// Styles
import { SuggestedContainer } from './autoSuggest-styles';
// Cmps
import { Menu } from '../../aux-cmps/Menu/Menu';

interface AutoSuggestProps {
  onAddSong: (suggestion: any) => void;
  closeAutoSuggest: () => void;
  isOn: boolean;
  suggestions: any;
}
export const AutoSuggest: React.FC<AutoSuggestProps> = ({
  onAddSong,
  closeAutoSuggest,
  isOn,
  suggestions,
}) => {
  return (
    <div>
      <Menu
        animation={{ type: 'fade', in: isOn }}
        left="20px"
        top="50px"
        width="fit-content"
        center={false}
        closeCb={closeAutoSuggest}
      >
        {suggestions.items?.map((suggestion: any, idx: number) => {
          return (
            <SuggestedContainer
              className="sugg"
              cb={() => {
                onAddSong(suggestion);
                closeAutoSuggest();
              }}
              key={idx}
            >
              <img src={suggestion.snippet.thumbnails.default.url} alt="" />
              {regService.replaceCharRef(suggestion.snippet.title)}
            </SuggestedContainer>
          );
        })}
      </Menu>
    </div>
  );
};
