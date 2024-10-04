import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export default function Report() {

    return (
      <div className={styles.report__wrapper}>
        <header className={styles.report__header}>
            <div className={styles.report__header__row}>
                Министерство науки и высшего образования 
                Российской Федерации 
            </div>
            
            <div className={styles.report__header__row}>
                <img src="/nstu-logo.png" alt="НГТУ НЭТИ" />
            </div>
        
            <div className={styles.report__header__row}>
                КАФЕДРА ТЕОРЕТИЧЕСКОЙ И ПРИКЛАДНОЙ ИНФОРМАТИКИ
            </div>
        </header>
        <h1 className={styles.report__mainTitle}>
            Лабораторная работа №2, №3
            по дисциплине «Основы web-программирования»
        </h1>
        <aside className={styles.report__titlePage__description}>
            <ul>
                <li>Факультет прикладной математики и информатики</li>
                <li>Группа: 		<span>ПМИ-22</span></li>
                <li>Студент:        <span>Перков Денис Витальевич</span></li>
                <li>Преподаватель: 	<span>Цыгулин Алексей Александрович</span></li>
            </ul>
        </aside>
        <div className={styles.report__titlePage__footer}>
            Новосибирск 2024
        </div>

        <main>
            <h2>Ход работы</h2>

            <div className={styles.report__main__content}>
                В ходе лабораторной работы была создана страница "О себе", 
                а также реализован функционал комментариев с использованием
                JSON-файла в качестве хранилища и отдельная админ-страница 
                для управления ими
            </div>

            <h3 className={styles.report__main__subTitle}>Ссылки: </h3>
            <ul className={styles.report__main__links}>
                <li>
                    <a href="https://github.com/Perk7/Web">Репозиторий GitHub</a>
                </li>
                <li>
                    <Link to={"/about"}>Реализованная страница "о себе"</Link>
                </li>
                <li>
                    <Link to={"/admin"}>Админ-панель управления комментариями</Link>
                </li>
            </ul>
        </main>
      </div>
    );
}