import { userActionTypes } from "./action";

export const userInitialState = {
  isAuthenticated: false
};

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        isAuthenticated: true
      });
    }
    case userActionTypes.SET_LOGOUT_SUCCESS: {
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    }
    default:
      return state;
  }
};

export default user;
