import appContextActions from "./AppActions";

export const logInUser = (payload) => {
  return {
    type: appContextActions.logInUser,
    payload,
  };
};

export const logOutUser = () => {
  return {
    type: appContextActions.logOutUser,
  };
};
