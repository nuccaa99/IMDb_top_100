import React from "react";
import routes from "../../config/routes";
import appRoutes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContextProvider";
import { logOutUser } from "../../contexts/AppActionsCreators";

const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useAppContext();

  const { dispatch } = useAppContext();

  return (
    <nav className="navbar">
      {routes.map((route) => {
        if (route.path !== "/" && !state.isUserLoggedIn) {
          return (
            <button
              className="nav_btn"
              key={route.path}
              onClick={() => navigate(route.path)}
            >
              {route.btn}
            </button>
          );
        } else if (route.path === "/") {
          return (
            <button
              onClick={() => navigate(route.path)}
              key={route.path}
              className="nav_btn_img"
            >
              <img src={route.btn} alt="home_icon" className="home_icon" />
            </button>
          );
        }
      })}
      {state.isUserLoggedIn && (
        <>
          <p className="nav_username">Hi, {state.user.userName}</p>
          <button
            className="nav_btn"
            onClick={() => {
              navigate(appRoutes.home);
              dispatch(logOutUser());
            }}
          >
            Log Out
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
