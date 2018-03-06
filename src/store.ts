import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as homeListReducer } from './pages/home/redux';

import { ActTypes } from './pages/home/actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  home: homeListReducer,
});

const { createLogger } = require('redux-logger');
const logger = createLogger({
  level: 'info',
  actionTransformer: (action) => {
    console.log(action)
    return Object.assign({}, action, {
      type: ActTypes[action.type] || action.type
    })
  }
})

const middleware = [logger];

let store;
if (!(window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION__'))) {
  store = createStore(reducers, applyMiddleware(...middleware))
} else {
  store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))
}

export default store;
