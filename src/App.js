import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './views/homepage/homepage';
import ShopPage from './views/shop/shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
