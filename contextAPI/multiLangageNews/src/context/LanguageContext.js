import { useContext } from "react";
import { createContext } from "react";




// 1) create context
export const LanguageContext = createContext({
    language : "english",
    setLanguageMode : ()=>{}
});


// 2) create provider
export const LanguageProvider = LanguageContext.Provider;


// 3) use context 
export default function useLanguage (){
    return useContext(LanguageContext)
} 