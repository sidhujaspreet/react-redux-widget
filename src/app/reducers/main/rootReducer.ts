import {combineReducers} from 'redux';
import weatherReducer from '../WeatherReducer';

export default combineReducers({
  weather: weatherReducer
});