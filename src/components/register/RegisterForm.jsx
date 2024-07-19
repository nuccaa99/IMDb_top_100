import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authActions from "../../constants/auth";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import routes from "../../constants/routes";

// const validPassword =
//   /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    authHandler(authActions.signUp, user)
      .then(() => {
        navigate(routes.logIn, { state: { success: true } });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form_label" htmlFor="userName">
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
      <label className="form_label" htmlFor="email">
        Email
      </label>
      <input
        className="form_input"
        type="email"
        placeholder="email"
        name="email"
        id="email"
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
      />
      <label className="form_label" htmlFor="password">
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
      <button type="submit" className="form_btn">
        Sign Up
      </button>
      {isLoading && (
        <div className="center_loader">
          <PuffLoader color="#fa6400" />
        </div>
      )}
      {error && <h3 className="error_msg">{error}</h3>}
    </form>
  );
};

export default RegisterForm;
