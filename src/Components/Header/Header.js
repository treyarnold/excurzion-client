import React from "react";

const Header = () => (
  <header >
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="pl-5" href="/"><span className="pl-4"><span className="navbar-brand pl-3">Excurzion</span></span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;