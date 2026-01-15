import React from 'react';

import MainHeader from '../../MainHeader/MainHeader'

import './About.css';

import { useTranslation } from 'react-i18next';

export default function About({ handleBackButton }) {
  const { t } = useTranslation();
  const languages = ['Javascript','HTML/CSS','Python','Java','C'];
  const frameworks = ['React', 'Express'];
  const bancoDeDados = ['MongoDB', 'PostgreSQL', 'MySQL'];
  const ferramentas = ['Git', 'Github', 'Trello', 'Figma'];

  const sections = [languages, frameworks, bancoDeDados, ferramentas];
  const sectionsStrings = [t("about.programming_languages"), "Frameworks", t("about.database"), t("about.tools")];

  function showSections() {
    return sections.map((section, index) => (
      <div className='section' key={index}>
        <h2 className='section-title text'>{'> ' + sectionsStrings[index]}</h2>
        <ul className='section-proficiencies'>
          {section.map((item) => (
            <li className='proficiency text' key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))
  }

  return(
    <div>
      <MainHeader handleBackButton={handleBackButton} pageName={t("menu.about")} />
      <div className='about'>

        <div className='about-sub about-intro'>
          <div style={{ width: '170px',  height: '170px'}}>
            <img className='avatar' src='/images/avatar.webp' alt='avatar' />
          </div>
          <h2 className='text'>Manoel Geremias</h2>
          <h5 className='text'>Web Developer</h5>
        </div>
        <hr/>

        <div className='about-sub about-sections'>
          {showSections()}
        </div>
        <hr/>

        <div className='about-sub about-education'>
          <h2 className='section-title text'>• {t("about.education")}</h2>
          <div className='section-education'>
            <p className='education text'>{t("about.cs")}</p>
            <p className='education-subtitle'>Universidade Jorge Amado 2023-2026</p>
          </div>
          <div className='section-education'>
            <p className='education text'>{t("about.english")}</p>
            <p className='education-subtitle'>Cambridge</p>
          </div>
          <div className='section-education'>
            <p className='education text'>{t("about.alura")}</p>
            <p className='education-subtitle'>{t("about.alura-sub")}</p>
          </div>
          <div className='section-education'>
            <p className='education text'>{t("about.udemy")}</p>
            <p className='education-subtitle'>{t("about.udemy-sub")}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
