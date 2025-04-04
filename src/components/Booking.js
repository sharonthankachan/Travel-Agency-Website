import React from 'react';
import styles from '../styles/Booking.module.scss';

export default function Booking() {
    return (
        <section className={styles.bookTrip}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.stepsContent}>
                        <span className={styles.subtitle}>Easy and Fast</span>

                        <h2 className={styles.title}>
                            Book Your Next Trip<br />In 3 Easy Steps
                        </h2>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepIconWrapper}>
                                    <img src='images/book-icon1.png' alt='Choose Destination' className={styles.stepIcon} />
                                </div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>Choose Destination</h3>
                                    <p className={styles.stepDescription}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIconWrapper}>
                                    <img src='images/book-icon2.png' alt='Make Payment' className={styles.stepIcon} />
                                </div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>Make Payment</h3>
                                    <p className={styles.stepDescription}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepIconWrapper}>
                                    <img src='images/book-icon3.png' alt='Reach Airport' className={styles.stepIcon} />
                                </div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>Reach Airport on Selected Date</h3>
                                    <p className={styles.stepDescription}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tripPreview}>
                        <img alt='booking' src='images/booking2.png' className={styles.tripImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}