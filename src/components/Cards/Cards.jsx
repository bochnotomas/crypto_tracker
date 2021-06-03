import React from 'react';

import cx from 'classnames'
import styles from './Cards.module.css';
import Card from '../Card/Card';

import img1 from '../../images/eth.png';
import img2 from '../../images/btc.png';
import img3 from '../../images/ltc.png';
import img4 from '../../images/xrp.png';

export default function Cards() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Top coins:</h2>
            <Card src={img2} name={"BTC/USD"} price={"38883.40"} />
            <Card src={img1} name={"ETH/USD"} price={"2715.22"} />
            <Card src={img3} name={"LTC/USD"} price={"192.14"} />
            <Card src={img4} name={"XRP/USD"} price={"1.0294"} />
        </div>
    )
}

