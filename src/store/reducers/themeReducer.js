const initialState = {
    theme: 'light'
}

export function themeReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.theme
            }

        default:
            return state
    }
}