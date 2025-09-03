import React, { useState, useEffect } from 'react';
import { FaMoon, FaQuestion } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { IoIosSunny} from "react-icons/io";

import './Header.css'

import { setTheme } from '../../utils/themes'
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [localTheme, setLocalTheme] = useState(localStorage.getItem('theme') || 'dark-theme');

  function changeTheme() {
    setLocalTheme(localTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }
  const changeCurrentLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme])

  return(
    <header className="header text">
      <div className='header-left'>
        <div className="tooltip">
          <button title="Tema" className='header-button' onClick={changeTheme}> {localTheme === 'light-theme' ? <FaMoon /> : <IoIosSunny />} </button>
          <span className="tooltiptext text">{t("header.theme")}</span>
        </div>
        <div className="tooltip">
          <button title="Idioma" className='header-button' onClick={() => changeCurrentLanguage()}> <IoLanguage/> </button>
          <span className="tooltiptext text">{t("header.language")}</span>
        </div>
      </div>
      <div className="tooltip">
        <button title="???" className='header-button'><FaQuestion /></button>
        <span className="tooltiptext text">{t("header.garbage")}</span>
      </div>
    </header>
  )
}
