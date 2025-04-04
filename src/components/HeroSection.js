"use client";
import { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import styles from "../styles/HeroSection.module.scss";

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [travelType, setTravelType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ destination, travelType, date, guests });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.introTitle}>
            Best Destinations around the world
          </p>
          <h1 className={styles.title}>
            Travel, <span className={styles.highlightedText}>enjoy</span> and live a new and full life
            <img className={styles.underline} alt="decor" src="/images/HeroUnderline.png"/>
          </h1>
          
          <p className={styles.subtitle}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.findMoreButton}>Find out more</button>
            <button className={styles.playButton}>
              <div className={styles.playIcon}>
                <IoMdPlay />
              </div>
              <p>Play Demo</p>
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/images/heroTestImg.png"
            alt="Travel the world"
          />
        </div>
      </div>
    </section>
  );
}