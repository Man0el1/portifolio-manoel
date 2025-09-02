import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import MainHeader from '../../MainHeader/MainHeader'

import './Work.css'

export default function Menu({ handleBackButton }) {

  const projects = [
    {
      title: 'VetSchedule',
      description: '• Um sistema de agendamento de consultas para atendimento médico',
      img: '/images/VetSchedule.webp'
    },
    {
      title: 'Ajuste de Opacidade',
      description: '• Sistema simples em python para deixar imagens transparentes',
      img: '/images/transjar.webp'
    }
  ];

  return (
    <div className="work">
      <MainHeader handleBackButton={handleBackButton} pageName={'Trabalhos'} />

      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2 className="text project-title">{project.title}</h2>
          <p className="text project-explanation">{project.description}</p>

          <Zoom zoomMargin={5}>
            <div className="photo-container">
              <img className="project-photo" src={project.img} alt={project.title} />
            </div>
          </Zoom>
          <hr/>

        </div>
      ))}

      <div className='end-project'>
        <h2 className='text'>Veja mais no meu
          <a className="github-link" href="https://github.com/Man0el1" target="_blank" rel="noopener noreferrer"> GitHub</a>
        !</h2>
      </div>
    </div>
  );
}
