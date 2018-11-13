import * as React from "react";
import {Route, Switch} from 'react-router';
import HomeComponent from '../components/pages/home/HomeComponent';
import WidgetContainer from "../containers/pages/widget/WidgetContainer";

export const AllRoutes = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route exact path="/widget" component={WidgetContainer}/>
      </Switch>
  );
};