import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movieImg, movieTitle, movieYear, movieId }) => {
  return (
    <Link to={`/${movieId}`} className="movie_card">
      <img className="movie_img" src={movieImg} alt="movie" />
      <p className="movie_title">{movieTitle}</p>
      <p className="movie_year">{movieYear}</p>
    </Link>
  );
};

export default Movie;
