// import {Component} from "react";
import { connect } from 'react-redux';
// import fetchWeatherData from '../../../actions/WeatherAction'
import Widget from '../../../components/pages/widget/Widget';

function mapStateToProps(state: any) {
  // You return what it will show up as props of myContainer
  return {
    city: state.weather.city,
    data: state.weather.data
  };
}

function mapDispatchToProps(dispatch: any) {
  return {};
  // Whenever property is called, it should be passed to all reducers
  // return onClick({ property: property }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);