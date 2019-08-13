import React from "react";

import classes from "./Navigation.module.css";

const Navigation = () => (
  <nav className={classes.sideDrawer}>
    <h2>Navigation</h2>
    <h3>History</h3>
    <h3>Upload</h3>
    <h3>Login</h3>
    <h3>Sign-up</h3>

  </nav>
);

export default Navigation;