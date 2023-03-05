import { createContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ( { children } ) => {

    const data = {

    }
    
    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;