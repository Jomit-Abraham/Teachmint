import { combineReducers } from 'redux';
import pizzaReducer from './PizzaReducer';

const rootReducer = combineReducers({
  pizza: pizzaReducer,
});

export default rootReducer;