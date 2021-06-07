import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Main.module.css';
import Chart from '../Chart/Chart'
import CryptoPicker from '../CryptoPicker/CryptoPicker'

export default function Main() {

    const [coins, setCoins] = useState([]);
    const [coin, setCoin] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        try {
            axios.get('https://api.coingecko.com/api/v3/coins').then(response => {
                const modifiedData = response.data.map((coin) => ({
                    id: coin.id,
                    // symbol: coin.symbol.toUpperCase(),
                    name: coin.name,
                    // image: coin.image.large,
                    // current_price: coin.market_data.current_price.usd,
                    // volume: coin.market_data.total_volume.usd,
                    // percentage: coin.market_data.price_change_percentage_24h,
                }));
                setCoins(modifiedData);
                setCoin(modifiedData[0].id)
                setLoading(false);
            });

            console.log(coins)

        } catch (error) {
            console.log(error);
        }

    }, []);




    if (loading) {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Loading...</h2>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <CryptoPicker coins={coins} onChange={ (coinId) => setCoin(coinId)} />
            <Chart coin={coin}/>
        </div>
    )
}
