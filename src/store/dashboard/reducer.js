import { dashboardActionTypes } from "./action";

export const dashboardInitialState = {
  users: []
};

const dashboard = (state = dashboardInitialState, action) => {
  switch (action.type) {
    case dashboardActionTypes.GET_USER_VALUES: {
      return Object.assign({}, state, {
        users: action.users
      });
    }
    default:
      return state;
  }
};

export default dashboard;
