import jwt_decode from "jwt-decode";

export const toggleLocalStorage = (token) => {
  if (token) {
    localStorage.setItem("accesToken", token);
  } else {
    localStorage.removeItem("accesToken");
  }
};

export const parseToken = (token) => {
  return jwt_decode(token);
};

export const isTokenValid = (token) => {
  const data = parseToken(token);
  const currDate = Date.now() / 1000;
  return currDate < data.exp;
};
