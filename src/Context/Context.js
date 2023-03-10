import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ( { children } ) => {

    let INFS = [
    ]

    const [infs, setInfs] = useState(INFS)

    const data = {
        infs, setInfs
    }
    
    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;