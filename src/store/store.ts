import { createTemplateStore } from './template/templateStore'
import { createThemeStore } from './theme/themeStore'
export function createStore():any {
    return {
        ...createTemplateStore,
        ...createThemeStore
    }
}