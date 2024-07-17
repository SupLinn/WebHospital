// components/Nav.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';

const Nav = () => {
  const [showHospitalsDropdown, setShowHospitalsDropdown] = useState(false);
  const [showCallUsDropdown, setShowCallUsDropdown] = useState(false);

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>Aster CMI Hospital</div>
      <div className={styles.navLinks}>
        <div 
          className={styles.navItem} 
          onMouseEnter={() => setShowHospitalsDropdown(true)} 
          onMouseLeave={() => setShowHospitalsDropdown(false)}
        >
          <NavLink to="any" className={styles.navLink}>Our Hospitals</NavLink>
          {showHospitalsDropdown && (
            <div className={styles.dropdownMenu}>
              <NavLink to="any" className={styles.dropdownItem}>Hospital 1</NavLink>
              <NavLink to="any" className={styles.dropdownItem}>Hospital 2</NavLink>
              <NavLink to="any" className={styles.dropdownItem}>Hospital 3</NavLink>
            </div>
          )}
        </div>
        <NavLink to="any" className={styles.navLink}>Our Specialities</NavLink>
        <NavLink to="any" className={styles.navLink}>Book An Appointment</NavLink>
        <NavLink to="any" className={styles.navLink}>International Patients</NavLink>
        <div 
          className={styles.navItem} 
          onMouseEnter={() => setShowCallUsDropdown(true)} 
          onMouseLeave={() => setShowCallUsDropdown(false)}
        >
          <NavLink to="any" className={styles.navLink}>
            <span className={styles.callUsIcon}>📞</span> Call Us
          </NavLink>
          {showCallUsDropdown && (
            <div className={styles.dropdownMenu}>
              <NavLink to="any" className={styles.dropdownItem}>Contact 1</NavLink>
              <NavLink to="any" className={styles.dropdownItem}>Contact 2</NavLink>
              <NavLink to="any" className={styles.dropdownItem}>Contact 3</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
