import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CommentsList from './components/CommentsList';
import Signup from './components/Signup';

import styles from './styles.module.css'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) setIsAuthenticated(true)
  }, [])

  return (<>
    <header className={styles.admin__header}>
      <Link className={styles.admin__link} to='/'>Отчет</Link>
    </header>
    {isAuthenticated
      ? <CommentsList />
      : <Signup authStatusHandler={setIsAuthenticated} />
    }
  </>)
}