import * as React from 'react';
import './HomeComponent.scss';

class HomeComponent extends React.Component<{}> {
  render() {
    return (
        <div className="home-wrapper">
          <h5>This page is here only to test routing. You should better switch to 'Widget' in order to get weather data.. ;)</h5>
        </div>
    );
  }
}

export default HomeComponent;