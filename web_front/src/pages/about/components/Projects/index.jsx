import React from 'react'
import Slider from "react-slick";

import styles from './styles.module.css'
import './styles.css'
import mainStyles from '../../styles.module.css'

import projects from './projects.json';

const sliderSettings = {
  infinite: true,
  arrows: window.innerWidth > 500,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Projects() {
  return (
    <section className={styles.projectsBlock}>
      <h2 className={styles.projectsTitle}>Мои проекты</h2>

      {projects.map(proj => (
        <div className={styles.project}>
          <h3 className={styles.project__title}>{proj.name}</h3>
          <p className={styles.project__desc}>{proj.description}</p>

          <ul className={styles.project__list}>
            {proj.list && proj.list.map(item => <li className={styles.project__list__item}>{item}</li>)}
          </ul>

          <div className={styles.project__imagesBlock}>
            <Slider {...sliderSettings}>
              {proj.images.map(item => <img loading="lazy" src={`portfolio/${item}`} className={styles.projectImage} alt="" />)}
            </Slider>
          </div>

          <ul className={styles.project__refs}>

            <li className={styles.project__link}>
              <span>
                {({invami: 'APK файл: ', 
                   tgw: 'Исходный код (Frontend): ', 
                   false: 'Сайт: '})[proj.app]}
              </span>
              <a target='blank' href={`https://${proj.refs[0]}`} className={mainStyles.link}>{proj.app !== 'invami' ? proj.refs[0] : 'Скачать'}</a>
            </li>

            <li className={styles.project__link}>
              <span>{`Исходный код${proj.app === 'tgw' ? ' (Backend)' : ''}: `}</span>
              <a href={`https://${proj.refs[1]}`} target='blank' className={mainStyles.link}>{proj.refs[1]}</a>
            </li>

          </ul>

        </div>
      ))}
    </section>
  )
}
