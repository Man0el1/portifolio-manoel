import React, { useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import MainHeader from '../../MainHeader/MainHeader'

import './Work.css'

export default function Menu({ handleBackButton }) {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoomChange = (index, shouldZoom) => {
    setZoomedIndex(shouldZoom ? index : null);
  };

  const projects = [
    { title: 'VetSchedule', description: '• Projetinho aí', img: '/images/VetSchedule.png' },
    { title: 'Outro Projeto', description: '• Mais um teste legal para nos testarmos', img: '/images/VetSchedule.png' }
  ];

  return (
    <div className="work">
      <MainHeader handleBackButton={handleBackButton} pageName={'Trabalhos'} />

      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2 className="text project-title">{project.title}</h2>
          <p className="text project-explanation">{project.description}</p>
          <ControlledZoom
            isZoomed={zoomedIndex === index}
            onZoomChange={shouldZoom => handleZoomChange(index, shouldZoom)}
          >
            <img className="project-photo" src={project.img} loading="lazy" alt={project.title} />
          </ControlledZoom>
          <hr/>
        </div>
      ))}
    </div>
  );
}
