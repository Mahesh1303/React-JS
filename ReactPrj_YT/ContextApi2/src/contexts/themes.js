import React, { createContext, useContext } from "react";
import UserContext from "../../../ContextApi/src/context/Usercontext";

export const ThemeContext =createContext( {
    themeMode:"light",
    darktheme:()=>{},
    lighttheme:()=>{}
})
export const ThemeContextProvider=ThemeContext.Provider


// here to put some data into the context we can create a custom hook
export default function useTheme(){
    return useContext(ThemeContext)

}