import AuthGuard from "../Guard/AuthGuard";
import GuestGuard from "../Guard/GuestGuard";
import appRoutes from "../constants/routes";
import Home from "../pages/home/Home";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/signUp/SignUp";
import movieIcon from "../assets/movieicon.png";
import MovieDetails from "../pages/moviedetails/MovieDetails";

const routes = [
  {
    btn: movieIcon,
    path: appRoutes.home,
    Component: Home,
    Guard: AuthGuard,
  },
  {
    btn: "Log In",
    path: appRoutes.logIn,
    Component: LogIn,
    Guard: GuestGuard,
  },
  {
    btn: "Sign Up",
    path: appRoutes.signUp,
    Component: SignUp,
    Guard: GuestGuard,
  },
  {
    path: appRoutes.movie,
    Component: MovieDetails,
    Guard: AuthGuard,
  },
];

export default routes;
