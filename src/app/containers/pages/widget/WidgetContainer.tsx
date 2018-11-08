// import {Component} from "react";
import { connect } from 'react-redux';
// import fetchWeatherData from '../../../actions/WeatherAction'
import WidgetComponent from '../../../components/pages/widget/WidgetComponent';
import {fetchWeatherData} from "../../../actions/WeatherActions";

function mapStateToProps(state: any) {
  // You return what it will show up as props of myContainer
  return {
    city: state.weather.city,
    data: state.weather.data
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchWeatherData: () => dispatch(fetchWeatherData)
  };
  // Whenever property is called, it should be passed to all reducers
  // return onClick({ property: property }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetComponent);