import { useState, useEffect } from 'react';

import Header from './components/Header';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Comments from './components/Comments';
import Footer from './components/Footer';

import styles from './styles.module.css';

function AboutPage() {
    const [scroll, setScroll] = useState(0);
  
    function handleScroll() {
      setScroll(window.scrollY);
    };
  
    function handleUpButton() {
      window.scrollTo(0, 0);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className={styles.aboutPage}>
        <Header />
        <Contacts />
        <Projects />
        <Comments />
        <Footer />
        {scroll > 500 && <button className={styles.buttonTop} onClick={handleUpButton}><img src="icons/arrow.svg" alt="To top" /></button>}
      </div>
    );
}
  
export default AboutPage