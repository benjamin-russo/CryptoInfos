import { useEffect } from "react";
import { getSomeCryptosPriceCharts } from "../../axios";

import "./style.css";

const Home = () => {
    getSomeCryptosPriceCharts();
    return (
        <main class="main">
            <h1 class="main__title">Accueil</h1>
            <div class="home">
                <article class="home__box">
                    <h2 class="home__title">Bitcoin BTC</h2>
                </article>
                <article class="home__box">
                    <h2 class="home__title">Ethereum ETH</h2>
                </article>
                <article class="home__box">
                    <h2 class="home__title">Dogecoin DOGE</h2>
                </article>
                <article class="home__box">
                    <h2 class="home__title">Stellar XLM</h2>
                </article>
                <article class="home__box">
                    <h2 class="home__title">Stellar XLM</h2>
                </article>
            </div>
        </main>
    );
};

export default Home;
