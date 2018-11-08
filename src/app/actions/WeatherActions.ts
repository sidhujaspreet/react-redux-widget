export const FETCHING_WEATHER_DATA = 'FETCHING_WEATHER_DATA';
export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_FAILURE = 'FETCH_WEATHER_DATA_FAILURE';

const fetchingWeatherDataAction = () => {
  return {
    type: FETCHING_WEATHER_DATA,
    payload: 'result_of_simple_action'
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

export async function fetchWeatherData(dispatch: any) {
  dispatch(fetchingWeatherDataAction());
  fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(response => response.json())
      .then(json => dispatch(fetchWeatherDataSuccess(json)))
      .catch(error => fetchWeatherDataFailure(error));
}
