import { combineReducers } from "redux";
import { appReducer } from "./reducers";
export default combineReducers({
  appReducer: appReducer,
});
