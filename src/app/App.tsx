import * as React from 'react';
import {AllRoutes} from './routes/AllRoutes';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from 'react-redux';
import NavBar from "./components/common/nav-bar/NavBar";
import './App.scss';


const App = () => {
  return (
      <Router>
        <div className="body">
          {NavBar}
          <AllRoutes/>
        </div>
      </Router>
  );
};

export default connect()(App);