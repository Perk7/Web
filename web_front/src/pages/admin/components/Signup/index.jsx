import React, { useState } from 'react';

import styles from './styles.module.css'

const ADMIN_LOGIN = process.env.REACT_APP_ADMIN_LOGIN
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD

export default function Signup({ authStatusHandler }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      localStorage.setItem('auth', true)
      authStatusHandler(true)
    } else {
      alert('Неверный логин или пароль')
    }
  }

  return (
    <div className={styles.auth__container}>
      <h2 className={styles.auth__title}>Авторизация</h2>
      <input
        type="text"
        className={styles.auth__field}
        placeholder="Логин"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        className={styles.auth__field}
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!(login && password)} className={styles.auth__button} onClick={handleLogin}>Войти</button>
    </div>
  )
}