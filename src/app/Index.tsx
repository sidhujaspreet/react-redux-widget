import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import configureStore from "./store/store";

declare let module: any;

ReactDOM.render(
    <Provider store={configureStore()}>
      <App/>
    </Provider>,
    document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}