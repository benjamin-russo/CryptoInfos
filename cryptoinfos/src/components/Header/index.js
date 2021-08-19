import {
    Link
  } from "react-router-dom";

import './style.css';

function Header() {
    return (
        <header className="header">
            {/* HOME BUTTON */}
            <Link to="/">
                <img src="./icons/home.svg" alt="home icon" className="header__home"></img>
            </Link>
            {/* SEARCHBAR */}
            <form className="header__form">
                <input type="text" name="search" id="search" placeholder="Rechercher" className="header__input"></input>
                <button type="submit" className="header__button">
                    <img src="./icons/search.svg" alt="search icon" className="header__search"></img>
                </button>
            </form>
            {/* TOOLS */}
            <section className="header__tools">
                <p className="tools__p">Powered by</p>
                <div className="tools__box">
                    <a href="https://www.highcharts.com/">
                        <img src="./icons/highcharts.svg" alt="highcharts icon" className="tools__highcharts"></img>
                    </a>
                    <a href="https://www.blockchain.com/">
                        <img src="./icons/blockchain.svg" alt="blockchain.con icon" className="tools__blockchain"></img>
                    </a>
                </div>
            </section>
        </header>
    );
}
  
export default Header;