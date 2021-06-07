import React from 'react'
import styles from './Header.module.css';
import cx from 'classnames'

import Cards from '../Cards/Cards';


export default function Header(props) {


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.title_text}>Cryptozoid</h1>
                <i className={cx(styles.title_logo, "fas fa-robot")} ></i>
            </div>
            
            <Cards />
        </div>
    )
}
