import {weatherData} from "./main/initialState";
import {FETCHING_WEATHER_DATA, FETCH_WEATHER_DATA_FAILURE, FETCH_WEATHER_DATA_SUCCESS} from "../actions/WeatherActions";

let weatherReducer = (state = weatherData, action: any) => {
  switch (action.type) {
    case FETCHING_WEATHER_DATA:
      return {...state, ...{isFetching: true}};
    case FETCH_WEATHER_DATA_SUCCESS:
      return {...state, ...{isFetching: false, data: action.payload}};
    case FETCH_WEATHER_DATA_FAILURE:
      return {...state, ...{isFetching: false, error: action.payload}};
    default:
      return state;
  }
};

export default weatherReducer;