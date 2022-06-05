import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="">
      <div className="display-flex flex-wrap align-center space-between">
        <Link to="/">
          <h1 className >Kota's Portfoilio</h1>
        </Link>

        <nav>
          <Link className="navBarLink" to="/about">About</Link>
          <Link className="navBarLink" to="/projects">Projects</Link>
          <Link className="navBarLink" to="/contact">Contact</Link>
          <Link className="navBarLink" to="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;