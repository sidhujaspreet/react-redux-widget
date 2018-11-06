import * as React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component<{}> {
  render() {
    return (
        <div>
          <h1>This is Home Page</h1>
          <button><Link to="/Login">Login</Link></button>
          <button><Link to="/Register">Register</Link></button>
        </div>
    );
  }
}

export default Home;