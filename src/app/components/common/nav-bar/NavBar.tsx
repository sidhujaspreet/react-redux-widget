import {Link} from "react-router-dom";
import * as React from "react";
import './NavBar.scss';

const navBar = () => {
  return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/">Home</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/widget">Widget</Link></li>
          </ul>
        </div>
      </nav>
  );
};

export default navBar();

