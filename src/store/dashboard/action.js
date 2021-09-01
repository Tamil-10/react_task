const users = require("../../data/users.json");

export const dashboardActionTypes = {
  GET_USER_VALUES: "dashboard/GET_USER_VALUES"
};

export const getUserValues = () => {
  return (dispatch) => {
    dispatch({
      type: dashboardActionTypes.GET_USER_VALUES,
      users
    });
  };
};
