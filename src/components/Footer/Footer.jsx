import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <h2>Tomas Bochnovic, '21</h2>
            <div className={styles.links}>
                <a href="https://github.com/bochnotomas">
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/tomasbochnovic/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}
