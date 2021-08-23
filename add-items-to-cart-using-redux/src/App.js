import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Items from './components/Items';
import Cart from './components/Cart';
import Carousel from '../src/components/Carousel';

function App() {
  return (
    <Router>
      <Header></Header>
      <Carousel />
      <Switch>
        <Route exact path="/" render={() => {
          return <><div>
            <Items />
          </div></>
        }}></Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

