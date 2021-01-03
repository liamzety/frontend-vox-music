import React, { } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export function Navbar() {
    const { theme } = useSelector(state => state.themeReducer)
    const dispatch = useDispatch()

    // The function that toggles between themes
    const toggleTheme = () => {
        // // if the theme is not light, then set it to dark
        if (theme === 'light') {
            dispatch({ type: 'SET_THEME', theme: 'dark' })

        } else {
            dispatch({ type: 'SET_THEME', theme: 'light' })

        }
    }
    return (
        <nav>
            <button onClick={toggleTheme}>Toggle theme</button>

        </nav>
    )
}
