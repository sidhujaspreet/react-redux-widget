export const FETCHING_WEATHER_DATA = 'FETCHING_WEATHER_DATA';
export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_FAILURE = 'FETCH_WEATHER_DATA_FAILURE';

const fetchingWeatherDataAction = () => {
  return {
    type: FETCHING_WEATHER_DATA
  }
};
const fetchWeatherDataSuccess = (data: any) => {
  return {
    type: FETCH_WEATHER_DATA_SUCCESS,
    payload: data
  }
};
const fetchWeatherDataFailure = (error: any) => {
  return {
    type: FETCH_WEATHER_DATA_FAILURE,
    payload: error
  }
};

export function fetchWeatherData(dispatch: any) {
  const corsProxy = `https://cors-anywhere.herokuapp.com/`,
      url = `https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22`;
  dispatch(fetchingWeatherDataAction());
  fetch(corsProxy + url)
      .then(response => response.json())
      .then(json => dispatch(fetchWeatherDataSuccess(json)))
      .catch(error => fetchWeatherDataFailure(error));
}
