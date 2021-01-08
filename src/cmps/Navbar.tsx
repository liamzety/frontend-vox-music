import React from 'react';
import { useStore } from '../store/StoreContext';

export const Navbar = () => {
    const store = useStore()

    const toggleTheme = (): void =>  {
        if (store.theme === 'light') store.setTheme('dark')
        else store.setTheme('light')
    }
    return (
        <nav>
            <button onClick={toggleTheme}>Toggle theme</button>
        </nav>
    )
}
