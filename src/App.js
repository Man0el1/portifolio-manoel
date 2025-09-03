import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from './components/Header/Header'
import Menu from './components/MainPages/Menu/Menu'
import About from './components/MainPages/About/About'
import Contact from './components/MainPages/Contact/Contact'
import Work from './components/MainPages/Work/Work'
import Footer from './components/Footer/Footer'

import './App.css'

import { toggleSize } from './utils/mainSize'
import { handleMouseMove } from "./utils/mouseMov";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activePage, setActivePage] = useState("menu");
  const [currentLanguage, setCurrentLanguage] = useState("");
  const mainRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const detectedLang = i18n.language || window.localStorage.i18nextLng || "en";
    setCurrentLanguage(detectedLang);
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [activePage]);

  const changeLanguage = () => i18n.changeLanguage(currentLanguage === "en" ? "pt" : "en")

  function handleMenuClick(page){
    setActivePage(page);
    toggleSize(mainRef);
  }

  function handleBackButton() {
    setActivePage('menu')
    toggleSize(mainRef);
  }

  function renderPage() {
    switch (activePage) {
      case 'about': return <About handleBackButton={handleBackButton} />
      case 'work': return <Work handleBackButton={handleBackButton} />
      case 'contact': return <Contact handleBackButton={handleBackButton} />
      case 'menu': return <Menu handleMenuClick={handleMenuClick} />
      default: return null
    }
  }

  return (
    <>
      <div className="wrapper spotlight"
      onMouseMove={(e) => handleMouseMove(e, setMousePosition)}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      }}>
        <div className="stars"></div>
        <Header />

        <main ref={mainRef} className="main small-main">
          {renderPage()}
        </main>

        <Footer />
      </div>
    </>
  );
}
