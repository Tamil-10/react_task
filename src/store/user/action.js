export const userActionTypes = {
  SET_LOGIN_SUCCESS: "user/SET_LOGIN_SUCCESS",
  SET_LOGOUT_SUCCESS: "user/SET_LOGOUT_SUCCESS"
};

export const login = () => {
  return (dispatch) => {
    dispatch({
      type: userActionTypes.SET_LOGIN_SUCCESS
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: userActionTypes.SET_LOGOUT_SUCCESS
    });
  };
};
