"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles//Testimonials.module.scss';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const testimonials = [
    {
        id: 1,
        quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Mike taylor",
        location: "Lahore, Pakistan",
        image: "/images/chris-img.png"
    },
    {
        id: 2,
        quote: "Another testimonial quote goes here. This would be shown in the carousel.",
        name: "Chris Thomas",
        position: "CEO of Red Button",
        image: "/images/chris-img.png"
    },
    {
        id: 3,
        quote: "Third testimonial quote for the carousel rotation.",
        name: "Jane Doe",
        location: "New York, USA",
        image: "/images/chris-img.png"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);
    const autoplayDelay = 4000; 

    useEffect(() => {
        startAutoplay();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startAutoplay();
    }, [activeIndex]);

    const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, autoplayDelay);
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const handleMouseEnter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        startAutoplay();
    };

    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <div>
                    <div className={styles.header}>
                        <p className={styles.subtitle}>TESTIMONIALS</p>
                        <h2 className={styles.title}>What People Say About Us.</h2>
                    </div>
                    <div className={styles.dots}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ''}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className={styles.carouselContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={styles.testimonialCard}>
                        <div className={styles.imageContainer}>
                            <img
                                src={testimonials[activeIndex].image}
                                alt={testimonials[activeIndex].name}

                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.quote}>"{testimonials[activeIndex].quote}"</p>
                            <h4 className={styles.name}>{testimonials[activeIndex].name}</h4>
                            {testimonials[activeIndex].location && (
                                <p className={styles.location}>{testimonials[activeIndex].location}</p>
                            )}
                            {testimonials[activeIndex].position && (
                                <p className={styles.position}>{testimonials[activeIndex].position}</p>
                            )}
                        </div>
                    </div>

                    <div className={styles.navigation}>
                        <button
                            className={styles.arrowBtn}
                            onClick={() => {
                                const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
                                setActiveIndex(newIndex);
                            }}
                        >
                            <span className={styles.upArrow}><IoIosArrowUp /></span>
                        </button>



                        <button
                            className={styles.arrowBtn}
                            onClick={() => {
                                const newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
                                setActiveIndex(newIndex);
                            }}
                        >
                            <span className={styles.downArrow}><IoIosArrowDown /></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;