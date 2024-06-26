import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  cardReducer,
  userReducer,
});
