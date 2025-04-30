import { createContext, useContext} from "react"

// 1) theme context 
export const  ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})


// 2) use context Provider
export const ThemeProbvider = ThemeContext.Provider;



// 3) use THeme 
export default function useTheme() {
    return useContext(ThemeContext)
}

