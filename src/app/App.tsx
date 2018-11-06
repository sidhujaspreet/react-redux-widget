import * as React from 'react';
import routes from './routes/Routes';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';

import Home from "./components/pages/home/Home";
import navbar from "./components/common/Navbar";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import WidgetContainer from "./containers/pages/widget/Widget";


const App = () => {
  return (
      <Router>
        <div>
          {navbar}
          <hr/>
          
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/widget" component={WidgetContainer}/>
        </div>
      </Router>
  );
};

export default connect()(App);