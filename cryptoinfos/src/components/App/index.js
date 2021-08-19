import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './style.css';
import Header from '../Header';
import Home from '../Home';

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
