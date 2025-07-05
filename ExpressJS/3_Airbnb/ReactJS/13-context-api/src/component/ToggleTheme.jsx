import React, { useContext } from 'react'
import ThemeContext from '../data/ThemeContext'

const ToggleTheme = () => {
  const {theme,ThemeToggle}= useContext(ThemeContext);
  return (
    <button className={`m-2 p-3 mt-9 text-center ${theme==='light'?"bg-yellow-300 text-blue-500 " :" bg-gray-500  text-white "} `} onClick={ThemeToggle}>  change theme to { theme==="light"? "Dark" : "Light"}</button>
  )
}

export default ToggleTheme
