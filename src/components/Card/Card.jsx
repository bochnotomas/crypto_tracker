import React from 'react';
import cx from 'classnames'
import CountUp from 'react-countup';
import styles from './Card.module.css';

export default function Card(props) {
    return (
        <div className={styles.card}>

            <div className={styles.upper_data}>
                <div className={styles.upper_data_labels}>
                    <div className={styles.card_name}>
                        <span>{props.name}</span>
                    </div>
                    <div className={styles.card_price}>
                        <span>
                            <CountUp start={0} end={props.price} decimals={2} duration={3} separator={','}/>
                        </span>
                    </div>
                </div>
                <div className={styles.upper_data_image}>
                    <img src={props.src} alt="coin_image" />
                </div>
            </div>

            <div className={styles.lower_data}>
                <div className={styles.lower_data_change}>
                    <span>
                        +<CountUp start={0} end={7.76} decimals={2} duration={3} separator={','}/> %
                    </span>
                </div>
                <div className={styles.lower_data_volume}>
                    <span>
                        Volume: <CountUp start={0} end={336416806} decimals={2} duration={3} separator={','}/> USD  
                    </span>
                    
                </div>
            </div>
        </div>
    )
}
