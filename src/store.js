import { createStore, combineReducers } from "redux";
import { numberOfClicksReducer } from './reducer';

const rootReducer = combineReducers({
  numberOfClicks: numberOfClicksReducer,
});

export const store = createStore(rootReducer);