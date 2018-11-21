import * as React from "react";
import {Route, Switch} from 'react-router-dom';
import HomeComponent from '../components/pages/home/HomeComponent';
import WidgetContainer from "../containers/pages/widget/WidgetContainer";
import ErrorComponent from "../components/pages/error/ErrorComponent";

export const AllRoutes = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/widget" component={WidgetContainer}/>
        <Route component={ErrorComponent}/>
      </Switch>
  );
};