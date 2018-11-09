import * as React from 'react';
import './HomeComponent.scss';

class HomeComponent extends React.Component<{}> {
  render() {
    return (
        <div className="home-wrapper">
          <h1>This is Home Page</h1>
        </div>
    );
  }
}

export default HomeComponent;