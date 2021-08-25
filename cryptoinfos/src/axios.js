import axios from "axios";

export const getOneCryptoPriceChart = (symbol) => {
    // axios
    //     .get(
    //         `https://api.kraken.com/0/public/OHLC?pair=${symbol}EUR&interval=60`
    //     )
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((error) => {
    //         console.error("ERROR:" + error);
    //     });
    console.log(`I want to send a GET request to get the price graph of the ${symbol} crypto.`);
};

export const getSomeCryptosPriceCharts = () => {
    // axios
    //     .get(
    //         `https://api.kraken.com/0/public/OHLC?pair=${symbol}EUR&interval=60`
    //     )
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((error) => {
    //         console.error("ERROR:" + error);
    //     });
    console.log(`I want to send a GET request to get the price graph of several cryptocurrencies.`);
};
