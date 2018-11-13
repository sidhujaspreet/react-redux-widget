import {Link} from "react-router-dom";
import * as React from "react";
import './NavBar.scss';

const navBar = () => {
  return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid row">
          <div className="navbar-header col-6">
            <Link to="/">Home</Link>
          </div>
          <ul className="nav navbar-nav col-6">
            <li><Link to="/widget">Widget</Link></li>
          </ul>
        </div>
      </nav>
  );
};

export default navBar();

