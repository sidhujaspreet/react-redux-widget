import { connect } from 'react-redux';
import WidgetComponent from '../../../components/pages/widget/WidgetComponent';
import {fetchWeatherData} from "../../../actions/WeatherActions";

function mapStateToProps(state: any) {
  return {
    city: state.weather.city,
    data: state.weather.data,
    isFetching: state.weather.isFetching
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchWeatherData: () => dispatch(fetchWeatherData)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetComponent);