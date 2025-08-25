import React, { useRef } from 'react';
import { FaInfo } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import './Menu.css'

export default function Menu({ handleMenuClick }) {

  const menuRef = useRef(null);

  return(
    <div ref={menuRef} className="menu">
      <div className="introduction">
        <h1 className="big-text text">Olá! Sou <span id="nome" className='text'>Manoel Geremias</span>!</h1>
        <h2 className="text subtitle">Web Developer</h2>
      </div>

      <div className="main-icons">
        <div className="generic-icon text">
          <button title='Info' onClick={() => handleMenuClick("about")} className="button-icon"><FaInfo className="main-icon"/></button>
          <p className='icon-name'>Sobre</p>
        </div>
        <div className="generic-icon text">
          <button title='Trabalhos' onClick={() => handleMenuClick("work")} className="button-icon"><FaFolderOpen className="main-icon"/></button>
          <p className='icon-name'>Trabalhos</p>
        </div>
        <div className="generic-icon text">
          <button title='Mail' onClick={() => handleMenuClick("contact")} className="button-icon"><IoIosMail className="main-icon"/></button>
          <p className='icon-name'>Contato</p>
        </div>
      </div>

      <div className='status'>
        <h3 className='text status-date'>Status (18/08):</h3>
        <p className='text'>Aprendendo Next.js & planejando projetos com foco em backend</p>
      </div>
    </div>
  )
}
