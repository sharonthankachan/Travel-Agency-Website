"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Travelo" />
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Destinations</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">Hotels</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">Flights</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">Bookings</Link>
            </li>
            <div className={styles.mobileCta}>
              <p className={styles.navItem}>
                <Link href="/">Login</Link>
              </p>
              <p className={styles.signupBtn}>
                <Link href="/">Sign Up</Link>
              </p>
              <select className={styles.languageSelector} defaultValue={"EN"}>
                <option>EN</option>
                <option>Portugese</option>
              </select>
            </div>
          </ul>
        </nav>
        
        <div className={styles.cta}>
          <p className={styles.navItem}>
            <Link href="/">Login</Link>
          </p>
          <p className={styles.signupBtn}>
            <Link href="/">Sign Up</Link>
          </p>
          <select className={styles.languageSelector} defaultValue={"EN"}>
            <option>EN</option>
            <option>Portugese</option>
          </select>
        </div>

        <button
          className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.open : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className={styles.overlay} onClick={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;