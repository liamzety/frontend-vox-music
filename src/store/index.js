import React from 'react';
import { useLocalStore } from "mobx-react";

export const StoreContext = React.createContext()
export const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        templates: [],
        theme: 'light',
        //Template
        setTemplates: (temps) => {
            store.templates = temps
        },
        addTemplate: (temp) => {
            store.templates.push(temp)
        },
        removeTemplate: (tempId) => {
            store.templates = store.templates.filter(template => template._id !== tempId)

        },
        updateTemplate: (temp) => {
            const tempIdx = store.templates.findIndex(template => template._id === temp._id)
            store.templates[tempIdx] = temp
        },
        //Theme
        setTheme: (theme) => {
            store.theme = theme
        },
    }))

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

