import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins';

export const fetchData = async () => {

    try {
        const {data} = await axios.get(url);
        
        const modifiedData = data.map((cryptoData) => ({
           id: cryptoData.id,
           symbol: cryptoData.symbol,
           name: cryptoData.name,
           image: cryptoData.image.large,
           current_price: cryptoData.market_data.current_price.usd,
           volume: cryptoData.market_data.total_volume.usd,
           percentage: cryptoData.market_data.price_change_percentage_24h,
        }));

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}


