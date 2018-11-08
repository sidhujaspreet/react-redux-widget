import * as React from 'react';
import routes from './routes/Routes';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';

import HomeComponent from "./components/pages/home/HomeComponent";
import navbar from "./components/common/NavBar";
import LoginComponent from "./components/pages/login/LoginComponent";
import RegisterComponent from "./components/pages/register/RegisterComponent";
import WidgetContainer from "./containers/pages/widget/WidgetContainer";


const App = () => {
  return (
      <Router>
        <div>
          {navbar}
          <hr/>
          
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path="/login" component={LoginComponent}/>
          <Route exact path="/register" component={RegisterComponent}/>
          <Route exact path="/widget" component={WidgetContainer}/>
        </div>
      </Router>
  );
};

export default connect()(App);