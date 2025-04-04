"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.scss';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              Jadoo.
            </Link>
            <p className={styles.tagline}>
              Book your trip in minute, get full<br />
              Control for much longer.
            </p>
          </div>

          {/* Company Column */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/mobile">Mobile</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.linkList}>
              <li><Link href="/help">Help/FAQ</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/affiliates">Affiliates</Link></li>
            </ul>
          </div>

          {/* More Column */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>More</h3>
            <ul className={styles.linkList}>
              <li><Link href="/airlinefees">Airlinefees</Link></li>
              <li><Link href="/airline">Airline</Link></li>
              <li><Link href="/tips">Low fare tips</Link></li>
            </ul>
          </div>

          {/* Social and App Column */}
          <div className={styles.socialColumn}>
            <div className={styles.socialLinks}>
              <Link href="https://facebook.com" className={styles.socialIcon}>
                <FaFacebookF />
              </Link>
              <Link href="https://instagram.com" className={styles.socialIconInsta}>
                <img src="/images/instagram.png" alt="Instagram" />
              </Link>
              <Link href="https://twitter.com" className={styles.socialIcon}>
                <FaTwitter />
              </Link>
            </div>

            <h4 className={styles.appTitle}>Discover our app</h4>
            <div className={styles.storeButtons}>
              <Link href="https://play.google.com/store" className={styles.storeButton}>
                <img src="/images/googlePlay.png"  alt="Google Play" />
              </Link>
              <Link href="https://apple.com/app-store" className={styles.storeButton}>
                <img src="/images/applePlayStore.png" alt="App Store" />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}