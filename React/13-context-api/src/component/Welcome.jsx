import React, { useContext } from 'react'
import ThemeContext from '../data/ThemeContext'

const Welcome = () => {
 const {theme}= useContext(ThemeContext);
 console.log(theme);
  return (
    
      <div className={`text-3xl text-center ${theme==='light'?" text-green-400   bg-red-600":"text-white bg-black"}`}>Welcome to the theme changing App </div>
    
  )
}

export default Welcome;
