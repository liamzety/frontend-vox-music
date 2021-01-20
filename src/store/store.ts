import { createModalStore } from './modal/modalStore'
import { createPlaylistStore } from './playlist/playlistStore'
import { createThemeStore } from './theme/themeStore'
import { createUserMsgStore } from './userMsg/userMsgStore'
export function createStore():any {
    return {
        ...createPlaylistStore,
        ...createThemeStore,
        ...createUserMsgStore,
        ...createModalStore,
    }
}