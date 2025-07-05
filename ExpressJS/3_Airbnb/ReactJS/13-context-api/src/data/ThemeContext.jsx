import { createContext,children} from 'react';
import { useState } from 'react';


const ThemeContext=createContext();


export const ThemeProvider =({children})=>{

const [theme ,setTheme]= useState('dark');

 const ThemeToggle=()=>{
  setTheme(currentTheme=>currentTheme==='light'?'dark':'light')
 }
 const contextVal={
  theme:theme,
  ThemeToggle:ThemeToggle
 };
 return <ThemeContext.Provider value={contextVal}>
  {children}
 </ThemeContext.Provider>

}
export default ThemeContext;
// export default ThemeProvider;
