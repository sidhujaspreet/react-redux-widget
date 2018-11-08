import React from 'react';
import {Route, Switch} from 'react-router';
import HomeComponent from '../components/pages/home/HomeComponent';
// import LoginComponent from '../components/pages/login/LoginComponent'
// import HomeComponent from '../components/pages/home/HomeComponent'

const routes = () => {
  return (
      <Route>
        <Route exact path="/" component={HomeComponent}/>
      </Route>
  );
};

export default routes;