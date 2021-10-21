import {combineReducers, createStore} from 'redux'
import propertyReducer from './reducers/propertyReducer'

const reducers = combineReducers({
  property: propertyReducer
});

const store = createStore(reducers);

export default store;
