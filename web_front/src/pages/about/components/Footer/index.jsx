import React from 'react'

import styles from './styles.module.css'
import mainStyles from '../../styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__links}>
        <li className={styles.footer__link}>
          <img className={styles.footer__icon} src="icons/telegram.svg" alt="icon" />
          <a className={`${mainStyles.link} ${styles.footer__ref}`} href="http://t.me/perk_tgd" target="_blank" rel="noopener noreferrer">Telegram</a>
        </li>
        <li className={styles.footer__link}>
          <img className={styles.footer__icon} src="icons/cv.svg" alt="cv" />
          <a className={`${mainStyles.link} ${styles.footer__ref}`} target='_blank' href="https://drive.google.com/file/d/1hcPSuwNDtSievH0Qk6qNLh3Pw6_3OLZb/view?usp=sharing" rel="noopener noreferrer">Резюме</a>
        </li>
        <li className={styles.footer__link}>
          <img className={styles.footer__icon} src="icons/github.svg" alt="icon" />
          <a className={`${mainStyles.link} ${styles.footer__ref}`} href="https://github.com/Perk7" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </footer>
  )
}
