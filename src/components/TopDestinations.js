import React from 'react';
import styles from '../styles/TopDestinations.module.scss';
import { IoNavigate } from "react-icons/io5";

export default function TopDestinations() {
  const destinations = [
    {
      id: 1,
      image: '/images/rome.png',
      name: 'Rome, Italy',
      price: '$5,42k',
      duration: '10 Days Trip',
    },
    {
      id: 2,
      image: '/images/london.png',
      name: 'London, UK',
      price: '$4.2k',
      duration: '12 Days Trip',
    },
    {
      id: 3,
      image: '/images/europe.png',
      name: 'Full Europe',
      price: '$15k',
      duration: '28 Days Trip',
    },
  ];

  return (
    <section className={styles.topDestinations}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subHeading}>Top Selling</span>
          <h2 className={styles.heading}>Top Destinations</h2>
        </div>
        
        <div className={styles.destinationsGrid}>
          {destinations.map((destination) => (
            <div key={destination.id} className={styles.destinationCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className={styles.destinationImage}
                />
              </div>
              <div className={styles.destinationInfo}>
                <div className={styles.destinationDetails}>
                  <h3 className={styles.destinationName}>{destination.name}</h3>
                  <span className={styles.destinationPrice}>{destination.price}</span>
                </div>
                <div className={styles.destinationDuration}>
                  <span className={styles.durationIcon}>
                    <IoNavigate />
                  </span>
                  <span className={styles.duration}>{destination.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img className={styles.spiralDecor} alt='spiral decor' src='images/spiralDecor.png'/>
    </section>
  );
}