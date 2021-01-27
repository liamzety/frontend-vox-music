import { createModalStore } from './modal/modalStore';
import { createPlaylistStore } from './playlist/playlistStore';
import { createThemeStore } from './theme/themeStore';
import { createUserMsgStore } from './userMsg/userMsgStore';
import { createUserStore } from './user/userStore';
import { createPlayerStore } from './player/playerStore';

export function createStore(): any {
  return {
    ...createPlaylistStore,
    ...createThemeStore,
    ...createUserMsgStore,
    ...createModalStore,
    ...createUserStore,
    ...createPlayerStore,
  };
}
