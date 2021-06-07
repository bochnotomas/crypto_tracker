import React, {useEffect, useState} from 'react';

import cx from 'classnames'
import styles from './Cards.module.css';
import Card from '../Card/Card';

import img1 from '../../images/eth.png';
import img2 from '../../images/btc.png';
import img3 from '../../images/ltc.png';
import img4 from '../../images/xrp.png';

// import {fetchData} from '../../api';
import axios from 'axios';


export default function Cards(props) {

    const [isLoading, setLoading] = useState(true);
    const [coinsData, setCoinsData] = useState([]);

    useEffect(()=>{
        try {
            axios.get('https://api.coingecko.com/api/v3/coins').then(response => {
                const modifiedData = response.data.map((coin) => ({
                    id: coin.id,
                    symbol: coin.symbol.toUpperCase(),
                    name: coin.name,
                    image: coin.image.large,
                    current_price: coin.market_data.current_price.usd,
                    volume: coin.market_data.total_volume.usd,
                    percentage: coin.market_data.price_change_percentage_24h,
                }));
                setCoinsData(modifiedData);
                setLoading(false);
            });

            console.log(coinsData)

        } catch (error) {
            console.log(error);
        }

    }, []);

    if (isLoading) {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Loading...</h2>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Top coins:</h2>
            <Card 
                src={coinsData[0].image} 
                name={`${coinsData[0].symbol}/USD`} 
                price={coinsData[0].current_price} 
                volume={coinsData[0].volume} 
                change={coinsData[0].percentage} 
            />
            <Card 
                src={coinsData[1].image} 
                name={`${coinsData[1].symbol}/USD`} 
                price={coinsData[1].current_price} 
                volume={coinsData[1].volume} 
                change={coinsData[1].percentage} 
            />
            <Card 
                src={coinsData[2].image} 
                name={`${coinsData[2].symbol}/USD`} 
                price={coinsData[2].current_price} 
                volume={coinsData[2].volume} 
                change={coinsData[2].percentage} 
            />
            <Card 
                src={coinsData[3].image} 
                name={`${coinsData[3].symbol}/USD`} 
                price={coinsData[3].current_price} 
                volume={coinsData[3].volume} 
                change={coinsData[3].percentage} 
            />
        </div>
    )
}

