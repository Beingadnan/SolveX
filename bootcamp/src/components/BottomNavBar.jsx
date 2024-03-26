import React from 'react'
import { Link } from 'react-router-dom';
import styles from './BottomNavBar.module.css';

export default function BottomNavBar() {

  const activeLinkStyle = {
    fontWeight: "bold",
    color: "blue",
  };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <>
         <div className={styles.navBar}>
        <Link  to="/" onClick={() => scrollToSection("introduction")}>
          Introduction
        </Link>
        <Link to="/" onClick={() => scrollToSection("curriculum")}>
          Curriculum
        </Link>
        <Link to="/" onClick={() => scrollToSection("instructor")}>
          Instructor
        </Link>
        <Link to="/" onClick={() => scrollToSection("campus")}>
          Campus
        </Link>
      </div>
    </>
  )
}
