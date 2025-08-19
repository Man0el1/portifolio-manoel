import React from 'react';
import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

import './Footer.css'

export default function Footer() {
  return(
    <footer className="footer">
      <div className="social-icons text">
        <a title='instagram-icon' href="https://www.instagram.com/man0el26" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
        <a title='github-icon' href="https://github.com/Man0el1" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
        <a title='linkedin-icon'href="https://www.linkedin.com/in/manoel-geremias-725397268/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </footer>
  )
}
