import React, { useState, useEffect } from 'react';
import { FaMoon, FaQuestion } from "react-icons/fa";
import { IoIosSunny} from "react-icons/io";

import './Header.css'

import {setTheme} from '../../utils/themes'

export default function Header() {
  const [localTheme, setLocalTheme] = useState(localStorage.getItem('theme') || 'light-theme')

  function changeTheme() {
    setLocalTheme(localTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme])

  return(
    <header className="header text">
      <div className="tooltip">
        <button title="Tema" className='header-button' onClick={changeTheme}> {localTheme === 'light-theme' ? <FaMoon /> : <IoIosSunny />} </button>
        <span className="tooltiptext text">Tema</span>
      </div>
      <div className="tooltip">
        <button title="???" className='header-button'><FaQuestion /></button>
        <span className="tooltiptext text">???</span>
      </div>

    </header>
  )
}
