import React , { createContext, ReactNode, useState } from 'react'

interface ThemeContextInterface {
    theme : string,
    setTheme : (auth : string) => void
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined)

export const ThemeContextProvider = ({ children } : { children : ReactNode }) => {
    const [ theme, setTheme ] = useState('light')
    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}