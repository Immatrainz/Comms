import {createStore, combineReducers} from 'redux';
import loggeduser from './reducers/userReducer';
const rootReducer = combineReducers({
  places: loggeduser,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
