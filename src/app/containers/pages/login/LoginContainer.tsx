import * as React from 'react';
import {Link} from "react-router-dom";

class LoginContainer extends React.Component<{}> {
  render() {
    return (
        <div>
          <h1>This is Login Page</h1>
          <button><Link to="/">Home</Link></button>
        </div>
    );
  }
}

export default LoginContainer;