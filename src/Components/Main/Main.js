import React from "react";
import Navigation from "../Navigation/Navigation";

import classes from "./Main.module.css";
import VideoLinks from "../VideoLinks/VideoLinks";

const Main = () => (
  <main className={classes.main}>
    <div className="row vw-100">
      <Navigation />
      <VideoLinks />

    </div>
  </main>
);

export default Main;