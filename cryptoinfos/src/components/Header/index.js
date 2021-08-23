import {
    Link
  } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            {/* HOME BUTTON */}
            <Link to="/">
                <img src="/icons/home.svg" alt="home icon" className="header__home"></img>
            </Link>
            {/* SEARCHBAR */}
            <form className="header__form">
                {/* <input type="text" name="search" id="search" placeholder="Rechercher" className="header__input"></input> */}
                <select name="symbol" id="search" className="header__input">
                    <option value="">Selectionnez une cryptomonnaie</option>
                    <option value="BTC">Bitcoin | BTC</option>
                    <option value="ETH">Ethereum | ETH</option>
                    <option value="ADA">Cardano | ADA</option>
                    <option value="USDT">Tether USD | USDT</option>
                    <option value="XRP">Ripple | XRP</option>
                    <option value="DOGE">Dogecoin | DOGE</option>
                    <option value="DOT">Polkadot | DOT</option>
                    <option value="USDC">USD Coin | USDC</option>
                    <option value="SOL">Solana | SOL</option>
                </select>
                <button type="submit" className="header__button">
                    <img src="/icons/search.svg" alt="search icon" className="header__search"></img>
                </button>
            </form>
            {/* TOOLS */}
            <section className="header__tools">
                <p className="tools__p">Powered by</p>
                <div className="tools__box">
                    <a href="https://www.highcharts.com/">
                        <img src="/icons/highcharts.svg" alt="highcharts icon" className="tools__highcharts"></img>
                    </a>
                    <a href="https://www.blockchain.com/">
                        <img src="/icons/blockchain.svg" alt="blockchain.con icon" className="tools__blockchain"></img>
                    </a>
                </div>
            </section>
        </header>
    );
}
  
export default Header;