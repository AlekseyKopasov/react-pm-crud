import {combineReducers, createStore} from 'redux';
import listsReducer from './reducers/listsReducer';

const reducers = combineReducers({
  lists: listsReducer,
});

const store = createStore(reducers);

export default store;
