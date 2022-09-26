import { combineReducers } from "redux";
import formReducer from "./Form.reducer";

const rootReducer = combineReducers({
  form: formReducer,
});
export default rootReducer;
