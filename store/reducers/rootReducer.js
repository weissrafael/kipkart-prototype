import { combineReducers } from "redux";
import cartReducer from "./cart";
import userReducer from "./user";

const rootReducer = combineReducers({
  cartReducer,
  userReducer,
});

export default rootReducer;
