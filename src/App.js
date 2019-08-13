import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import VideoPage from "./Components/VideoPage/VideoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/videos/:id" component={VideoPage} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
