import React, { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer, initialState } from "./appReducer";
import { logInUser } from "./AppActionsCreators";
import { isTokenValid } from "../utils";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("accesToken");
    if (token && isTokenValid(token)) {
      dispatch(logInUser(token));
    }
  }, []);
  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};
export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }
  throw new Error("app context error");
};
export default AppContextProvider;
