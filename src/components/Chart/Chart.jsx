import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight,window.innerWidth]);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return size;
}


export default function Chart(props) {

    const [prices, setPrices] = useState([]);
    const [timeFormat, setTimeFormat] = useState("200");
    const [height, width] = useWindowSize();

    useEffect(()=> {
        try {
            axios.get(`https://api.coingecko.com/api/v3/coins/${props.coin}/market_chart?vs_currency=usd&days=${timeFormat}`).then(response => {
                const fetchedPrices = response.data.prices;
                setPrices(fetchedPrices);
            })
        } catch (error) {
            console.log(error);
        }
    }, [props.coin, timeFormat]);

    const lineChart = (
        prices.length ? (
            <Line 
            data = {{
                labels: prices.map(price => new Date(price[0]).toLocaleDateString()),
                datasets: [{
                    data: prices.map( price => price[1]),
                    borderColor: '#3333ff',
                    label: `${props.coin}`.charAt(0).toUpperCase() + `${props.coin}`.slice(1)
                }],
            }}
            options = {{
                responsive: true,
                maintainAspectRatio: true,
            }}
            height= {150} 
        />) : null
    );

    const lineChartBig = (
        prices.length ? (
            <Line 
            data = {{
                labels: prices.map(price => new Date(price[0]).toLocaleDateString()),
                datasets: [{
                    data: prices.map( price => price[1]),
                    borderColor: '#3333ff',
                    label: `${props.coin}`.charAt(0).toUpperCase() + `${props.coin}`.slice(1)
                }],
            }}
            options = {{
                responsive: true,
                maintainAspectRatio: true,
            }}
            height= {350} 
        />) : null
    );

    if (width < 768 ){
        return (
            <div className={styles.container}>
                {lineChartBig}
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setTimeFormat("1")}>1d</button>
                    <button className={styles.button} onClick={() => setTimeFormat("7")}>7d</button>
                    <button className={styles.button} onClick={() => setTimeFormat("30")}>1m</button>
                    <button className={styles.button} onClick={() => setTimeFormat("360")}>1y</button>
                </div>
            </div>
        )
    }else {
        return (
            <div className={styles.container}>
                {lineChart}
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setTimeFormat("1")}>1d</button>
                    <button className={styles.button} onClick={() => setTimeFormat("7")}>7d</button>
                    <button className={styles.button} onClick={() => setTimeFormat("30")}>1m</button>
                    <button className={styles.button} onClick={() => setTimeFormat("360")}>1y</button>
                </div>
            </div>
        )
    }
}
