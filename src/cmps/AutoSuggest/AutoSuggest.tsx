import React, { useState, useEffect } from 'react';
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
        left="0"
        width="100%"
        center={false}
        closeCb={closeAutoSuggest}
      >
        {suggestions.items?.map((suggestion: any, idx: number) => {
          return (
            <SuggestedContainer
              onClick={() => {
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
