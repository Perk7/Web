import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Денис Перков</h1>
      <Link
        className={styles.header__button} 
        to="/"
      >Отчет</Link>
    </header>
  )
}
