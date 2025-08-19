import React from 'react';

import MainHeader from '../../MainHeader/MainHeader'

import './About.css';

export default function About({ handleBackButton }) {
  const languages = ['Javascript','HTML/CSS','Python','Java','C'];
  const frameworks = ['React', 'Express'];
  const bancoDeDados = ['MongoDB', 'PostgreSQL', 'MySQL'];
  const ferramentas = ['Git', 'Github', 'Trello', 'Figma'];

  const sections = [languages, frameworks, bancoDeDados, ferramentas];
  const sectionsStrings = ['Linguagens', 'Frameworks', 'Banco de Dados', 'Ferramentas'];

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
      <MainHeader handleBackButton={handleBackButton} pageName={'Sobre'} />
      <div className='about'>

        <div className='about-sub about-intro'>
          <div style={{ width: '170px',  height: '170px'}}>
            <img className='avatar' src='/images/avatar.jpg' loading="lazy" alt='avatar' />
          </div>
          <h2 className='text'>Manoel Geremias</h2>
          <h5 className='text'>Web Developer e estudante</h5>
        </div>
        <hr/>

        <div className='about-sub about-sections'>
          {showSections()}
        </div>
        <hr/>

        <div className='about-sub about-education'>
          <h2 className='section-title text'>• Educação</h2>
          <div className='section-education'>
            <p className='education text'>Bacharelado em Ciencias da Computação </p>
            <p className='education-subtitle'>Universidade Jorge Amado 2023-2026</p>
          </div>
          <div className='section-education'>
            <p className='education text'>Certificado em Inglês Avançado (C1)</p>
            <p className='education-subtitle'>Cambridge</p>
          </div>
          <div className='section-education'>
            <p className='education text'>?? Horas de certificação</p>
          </div>
        </div>

      </div>
    </div>
  )
}
