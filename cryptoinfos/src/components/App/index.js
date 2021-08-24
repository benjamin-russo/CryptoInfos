import { Switch, Route, Link } from "react-router-dom";

import "./style.css";
import Header from "../Header";
import Home from "../Home";
import Search from "../Search";
import { useState } from "react";

const App = () => {
    const [search, setSearch] = useState(false);
    const [symbol, setSymbol] = useState("");
    return (
        <>
            <Header
                search={search}
                updateSearch={setSearch}
                symbol={symbol}
                updateSymbol={setSymbol}
            />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/search">
                    <Search symbol={symbol} updateSymbol={setSymbol} />
                </Route>
            </Switch>
        </>
    );
};

export default App;
