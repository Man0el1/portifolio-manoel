import React, { useRef } from 'react';
import { FaInfo } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import './Menu.css'

import { useTranslation } from 'react-i18next';

export default function Menu({ handleMenuClick }) {
  const { t } = useTranslation();
  const menuRef = useRef(null);

  return(
    <div ref={menuRef} className="menu">
      <div className="introduction">
        <h1 className="big-text text">{t('menu.intro')}<span id="nome" className='text'>Manoel Geremias</span>!</h1>
        <h2 className="text subtitle">Web Developer</h2>
      </div>

      <div className="main-icons">
        <div className="generic-icon text">
          <button title='Info' onClick={() => handleMenuClick("about")} className="button-icon"><FaInfo className="main-icon"/></button>
          <p className='icon-name'>{t('menu.about')}</p>
        </div>
        <div className="generic-icon text">
          <button title='Trabalhos' onClick={() => handleMenuClick("work")} className="button-icon"><FaFolderOpen className="main-icon"/></button>
          <p className='icon-name'>{t('menu.work')}</p>
        </div>
        <div className="generic-icon text">
          <button title='Mail' onClick={() => handleMenuClick("contact")} className="button-icon"><IoIosMail className="main-icon"/></button>
          <p className='icon-name'>{t('menu.contact')}</p>
        </div>
      </div>

      <div className='status'>
        <h3 className='text status-date'>Status (22/02):</h3>
        <p className='text'>{t('menu.status')}</p>
      </div>
    </div>
  )
}
