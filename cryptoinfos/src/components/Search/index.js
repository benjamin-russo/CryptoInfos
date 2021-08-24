import "./style.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
    const { search } = useLocation();
    let symbol;
    if (search) {
        const pair = search.substring(1).split("=");
        if (decodeURIComponent(pair[0]) == "symbol") {
            symbol = decodeURIComponent(pair[1]);
        }
    }
    return (
        <main className="main">
            <h1 className="main__title">Recherche: {symbol}</h1>
            <div className="search">
                <article className="search__box">
                    <h2 className="search__title">Bitcoin BTC</h2>
                </article>
            </div>
        </main>
    );
};

export default Search;
