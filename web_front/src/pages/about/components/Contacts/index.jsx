import React from 'react'

import styles from './styles.module.css'
import mainStyles from '../../styles.module.css'

export default function Contacts() {
  return (
    <section className={styles.contactsBlock}>
      <p className={styles.contacts__textContent}>
        Фронтенд-разработчик с 3+ годами опыта работы над pet-проектами и фриланс 
        заказами на биржах FL и Upwork. Студент 3-го курса Новосибирского 
        Государственного Технического Университета направления 
        “Прикладная математика и информатика”. Интересуюсь реализацией 
        бизнес-задач с использованием современных технологий.
      </p>
      <ul className={styles.contacts__list}>
        <li>
          Телефон: <a className={mainStyles.link}  href="tel:+79139566177">+7 (913) 956-61-77</a>
        </li>
        <li>
          Telegram: <a className={mainStyles.link}  href="http://t.me/perk_tgd" target="_blank" rel="noopener noreferrer">@perk_tgd</a>
        </li>
        <li>
          GitHub: <a className={mainStyles.link}  href="https://github.com/Perk7" target="_blank" rel="noopener noreferrer">github.com/Perk7</a>
        </li>
        <li>
          E-mail: <a className={mainStyles.link} href="mailto:denisperkov0@gmail.com">denisperkov0@gmail.com</a></li>
        <li>Россия, г. Новосибирск (GMT+7)</li>
      </ul>
    </section>
  )
}
