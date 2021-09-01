import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import user from "./user/reducer";
import dashboard from "./dashboard/reducer";
// import logger from "redux-logger";

const combinedReducer = combineReducers({
  user,
  dashboard
});

export default function configureStore(initialState) {
  const middlewares = [thunkMiddleware];
  // if (process.env.NODE_ENV !== "production") {
  //   middlewares.push(logger);
  // }

  return createStore(
    combinedReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}
