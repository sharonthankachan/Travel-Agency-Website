"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Subscribe.module.scss';
import { MdOutlineMail } from "react-icons/md";

export default function Subscribe() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <section className={styles.subscribeSection}>

            <div className={styles.container}>
            <img alt="curly decor" className={styles.curlyDecor1} src='images/curlDecor1.png' />
            <img alt="curly decor" className={styles.curlyDecor2} src='images/curlDecor2.png' />
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Subscribe to get information, latest news and other
                        interesting offers about Jadoo
                    </h2>

                    <form className={styles.subscribeForm} onSubmit={handleSubmit}>
                        <div className={styles.inputWrapper}>
                            <MdOutlineMail className={styles.emailIcon} />
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.emailInput}
                            />
                        </div>
                        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
                    </form>
                </div>

                <div className={styles.sendIcon}>
                    <img alt="paper plane" src='images/paperPlane.png' />
                </div>
            </div>
            <img alt="pattern decor" className={styles.patternDecor} src='images/plusGridPattern.png' />

        </section>
    );
}