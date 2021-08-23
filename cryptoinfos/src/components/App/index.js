import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './style.css';
import Header from '../Header';
import Home from '../Home';
import Search from '../Search';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </>
  );
}

export default App;
