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
      title: 'Outro Projeto',
      description: '• Mais um teste legal para nos testarmos',
      img: '/images/VetSchedule.webp'
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
              <img className="project-photo" src={project.img} loading="lazy" alt={project.title} />
            </div>
          </Zoom>
          <hr/>

        </div>
      ))}
    </div>
  );
}
