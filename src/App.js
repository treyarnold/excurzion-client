import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
