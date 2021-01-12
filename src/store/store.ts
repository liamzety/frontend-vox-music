import { createPlaylistStore } from './playlist/playlistStore'
import { createThemeStore } from './theme/themeStore'
export function createStore():any {
    return {
        ...createPlaylistStore,
        ...createThemeStore
    }
}