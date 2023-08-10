import { combineReducers } from "redux";

import pinReducer from "../reducers/pinReducer";
import sessionReducer from "../reducers/sessionReducer";
import sessionErrorReducer from "../reducers/sessionErrorReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  sessionError: sessionErrorReducer,
  pin: pinReducer,
});

export default rootReducer;