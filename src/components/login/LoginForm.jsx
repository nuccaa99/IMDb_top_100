import React, { useState } from "react";
import routes from "../../constants/routes";
import { authHandler } from "../../api/auth";
import authActions from "../../constants/auth";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContextProvider";
import { logInUser } from "../../contexts/AppActionsCreators";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { dispatch } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    authHandler(authActions.logIn, user)
      .then((data) => {
        dispatch(logInUser(data.token));
        navigate(routes.home);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName" className="form_label">
        User
      </label>
      <input
        className="form_input"
        type="text"
        placeholder="username"
        name="userName"
        id="userName"
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
      />
      <label htmlFor="password" className="form_label">
        Password
      </label>
      <input
        className="form_input"
        type="password"
        placeholder="password"
        name="password"
        id="password"
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
      />
      <button className="form_btn" type="submit">
        Log In
      </button>
      <p className="error_msg">{error.message}</p>
    </form>
  );
};

export default LoginForm;
