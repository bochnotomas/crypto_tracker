import React from 'react';
import cx from 'classnames'
import CountUp from 'react-countup';
import styles from './Card.module.css';

export default function Card(props) {
    
    if(props.change > 0){
        return (
            <div className={styles.card_green}>
    
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
                            <CountUp start={0} end={props.change} decimals={2} duration={3} separator={','}/> %
                        </span>
                    </div>
                    <div className={styles.lower_data_volume}>
                        <span>
                            Volume: <CountUp start={0} end={props.volume} decimals={2} duration={3} separator={','}/> USD  
                        </span>
                        
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div className={styles.card_red}>
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
                            <CountUp start={0} end={props.change} decimals={2} duration={3} separator={','}/> %
                        </span>
                    </div>
                    <div className={styles.lower_data_volume}>
                        <span>
                            Volume: <CountUp start={0} end={props.volume} decimals={2} duration={3} separator={','}/> USD  
                        </span>
                        
                    </div>
                </div>
            </div>
        )
    }

    
}
