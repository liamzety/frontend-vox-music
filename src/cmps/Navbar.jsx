import React, { } from 'react';

export function Navbar() {
    const toggleTheme = () => {
        //     // // if the theme is not light, then set it to dark
        //     if (theme === 'light') {
        //         dispatch({ type: 'SET_THEME', theme: 'dark' })

        //     } else {
        //         dispatch({ type: 'SET_THEME', theme: 'light' })

        //     }
    }
    return (
        <nav>
            <button onClick={toggleTheme}>Toggle theme</button>

        </nav>
    )
}
