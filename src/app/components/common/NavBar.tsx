import {Link} from "react-router-dom";
import * as React from "react";

const navBar = () => {
  return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/widget">Widget</Link>
        </li>
      </ul>
  );
};

export default navBar();