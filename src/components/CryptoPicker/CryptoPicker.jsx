import React, {useState, useEffect} from 'react';

import styles from './CryptoPicker.module.css';
import {Select, MenuItem} from '@material-ui/core';

export default function CryptoPicker(props) {

    
    return (
        <div className={styles.container}>
            <label>Select a coin:</label>
            <form>
                <Select defaultValue="bitcoin" className={styles.select} onChange={(e) => {props.onChange(e.target.value)} } >
                    {props.coins.map((coin, i) => <MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>)}
                </Select>
            </form>
        </div>
    )
}
