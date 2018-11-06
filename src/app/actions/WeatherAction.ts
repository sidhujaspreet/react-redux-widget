export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';
export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_FAILURE = 'FETCH_WEATHER_DATA_FAILURE';
//
// export const fetchWeatherData = () => {
//   return ({
//     type: 'FETCH_WEATHER_DATA',
//     payload: 'result_of_simple_action'
//   })
// };

const fetchWeatherDataAction = () => {
  return {
    type: FETCH_WEATHER_DATA,
    payload: 'result_of_simple_action'
  }
};
const fetchWeatherDataSuccessAction = (data: any) => {
  return {
    type: FETCH_WEATHER_DATA,
    payload: data
  }
};
const fetchWeatherDataFailureAction = (error: any) => {
  return {
    type: FETCH_WEATHER_DATA,
    payload: error
  }
};

export async function fetchWeatherData(dispatch: any) {
  dispatch(fetchWeatherDataAction());
  const response = await fetch(`http://api.openweathermap.org/data/2.5 /weather?q=pune&appid=99ac3d884763185b90a9cb9e8fd095dd`);
  const json = await response.json();
  dispatch(fetchWeatherDataSuccessAction(json));
}
