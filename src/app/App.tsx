import * as React from 'react';
import routes from './routes/Routes';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';

import HomeComponent from "./components/pages/home/HomeComponent";
import NavBar from "./components/common/nav-bar/NavBar";
import WidgetContainer from "./containers/pages/widget/WidgetContainer";


const App = () => {
  return (
      <Router>
        <div>
          {NavBar}
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path="/widget" component={WidgetContainer}/>
        </div>
      </Router>
  );
};

export default connect()(App);