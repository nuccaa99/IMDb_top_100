import React from "react";
import { useAppContext } from "../contexts/AppContextProvider";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const { state } = useAppContext();
  if (!state.isUserLoggedIn) {
    return (
      <div className="home_notloggedin">
        <div className="home_notloggedin_content">
          <p className="home_notloggedin_content_title">
            Please log in or sign up to view this content.
          </p>
          <div className="home_notloggedin_content_btn_wrapper">
            <button
              onClick={() => navigate(routes.logIn)}
              className="home_notloggedin_content_btn"
            >
              Log In
            </button>
            <button
              onClick={() => navigate(routes.signUp)}
              className="home_notloggedin_content_btn"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
