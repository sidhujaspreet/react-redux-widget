import * as React from 'react';
import {AllRoutes} from './routes/AllRoutes';
import {HashRouter} from "react-router-dom";
import {connect} from 'react-redux';
import NavBar from "./components/common/nav-bar/NavBar";
import './App.scss';


const App = () => {
  return (
      <HashRouter>
        <div className="body">
          {NavBar}
          <AllRoutes/>
        </div>
      </HashRouter>
  );
};

export default connect()(App);