import * as React from 'react';
import {Link} from "react-router-dom";

class RegisterContainer extends React.Component<{}> {
  render() {
    return (
        <div>
          <h1>This is Register Page</h1>
          <button><Link to="/">Home</Link></button>
        </div>
    );
  }
}

export default RegisterContainer;