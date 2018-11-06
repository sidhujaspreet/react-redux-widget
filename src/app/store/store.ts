import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

let w: any = window;

const configureStore = () => {
  return createStore(
      rootReducer,
      compose(
          applyMiddleware(thunk),
          w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
};

export default configureStore;