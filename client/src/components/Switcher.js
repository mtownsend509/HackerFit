import React, { useState } from 'react';
import useDarkMode from "../useDarkMode";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Switcher = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [DarkMode, setDarkMode] = useState(colorTheme === "light" ? false : true);
    
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkMode(checked);
    };


    return (
      <>
      <div className='ml-4 mr-[-50px]'>
          <DarkModeSwitch
              checked={DarkMode}
              onChange={toggleDarkMode}
                    size={30}
                    sunColor={'orange'}
                   
                    
                    
          />
          <h3 className='text-gray-800 dark:text-gray-300 pt-4'>{ colorTheme === 'light' ? "" : ""}</h3>
            </div>
            </>
  )
}

export default Switcher