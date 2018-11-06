import React from 'react';
import {Route, Switch} from 'react-router';
import Home from '../components/pages/home/Home';
// import Login from '../components/pages/login/Login'
// import Home from '../components/pages/home/Home'

const routes = () => {
  return (
      <Route>
        <Route exact path="/" component={Home}/>
      </Route>
  );
};

export default routes;