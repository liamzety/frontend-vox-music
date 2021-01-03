import React, { useContext } from 'react';
import { StoreContext } from '../store';

export function Navbar() {
    const store = useContext(StoreContext)

    const toggleTheme = () => {
        if (store.theme === 'light') store.setTheme('dark')
        else store.setTheme('light')
    }
    return (
        <nav>
            <button onClick={toggleTheme}>Toggle theme</button>
        </nav>
    )
}
