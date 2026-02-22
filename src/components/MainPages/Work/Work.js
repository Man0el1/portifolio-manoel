import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import MainHeader from '../../MainHeader/MainHeader'

import './Work.css'

import { useTranslation } from 'react-i18next';

export default function Menu({ handleBackButton }) {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('work.work_1'),
      description: t('work.work_1sub'),
      img: '/images/VetSchedule.webp'
    },
    {
      title: t('work.work_2'),
      description: t('work.work_2sub'),
      img: '/images/hotelapi.webp'
    },
    {
      title: t('work.work_3'),
      description: t('work.work_3sub'),
      img: '/images/transjar.webp'
    }
  ];

  return (
    <div className="work">
      <MainHeader handleBackButton={handleBackButton} pageName={t("menu.work")} />

      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2 className="text project-title">{project.title}</h2>
          <p className="text project-explanation">{'• ' + project.description}</p>

          <Zoom zoomMargin={5}>
            <div className="photo-container">
              <img className="project-photo" src={project.img} alt={project.title} />
            </div>
          </Zoom>
          <hr/>

        </div>
      ))}

      <div className='end-project'>
        <h2 className='text'>{t('work.github')}
          <a className="github-link" href="https://github.com/Man0el1" target="_blank" rel="noopener noreferrer"> GitHub</a>
        !</h2>
      </div>
    </div>
  );
}
