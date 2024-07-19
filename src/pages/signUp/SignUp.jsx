import React from "react";
import RegisterForm from "../../components/register/RegisterForm";
const SignUp = () => {
  return (
    <div className="signup_container">
      <div className="signup_container_backdrop">
        <div className="signup_form_container">
          <h1 className="login_title">Sign Up</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
