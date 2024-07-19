import React from "react";
import LoginForm from "../../components/login/LoginForm";
import { useLocation } from "react-router-dom";

const LogIn = () => {
  const location = useLocation();
  return (
    <div className="login_container">
      <div className="login_container_backdrop">
        <div className="login_form_container">
          <h1 className="login_title">Log In</h1>
          {location.state?.success && (
            <h1 className="login_congrats">Thank you for signing up!</h1>
          )}
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
