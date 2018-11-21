import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main/rootReducer';

const configureStore = () => {
  return createStore(
      rootReducer,
      compose(
          applyMiddleware(thunk),
          (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
};

export default configureStore;