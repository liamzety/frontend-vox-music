import { storageService } from "../../services/storageService"

export const createThemeStore= {
        theme: storageService.load('theme') || 'dark',
        setTheme: function(theme:any) {
            this.theme = theme
            storageService.save('theme',theme)
        }
}
