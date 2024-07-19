import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovie } from "../../api";
import routes from "../../constants/routes";
import { PuffLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import IMDB from "../../assets/IMDb.png";

const MovieDetails = () => {
  const navigate = useNavigate();
  const movieId = useParams().movie;

  const [movieDetails, setMovieDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovie(movieId)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div>
        <p className="error_txt">{error}</p>
      </div>
    );
  }

  return (
    <div className="movie_details_container">
      {isLoading && (
        <div className="center_loader">
          <PuffLoader color="#fa6400" />
        </div>
      )}
      {!isLoading && (
        <>
          <FontAwesomeIcon
            className="goback_icon"
            icon={faArrowLeft}
            onClick={() => navigate(routes.home)}
          />
          <div className="movie_details_wrapper">
            <img
              className="movie_details_img"
              src={movieDetails.image}
              alt="movie"
            />
            <ul className="details_container">
              <li className="details_title">
                {movieDetails.title} {movieDetails.rating}
                <img src={IMDB} alt="imdb_icon" className="imdb_icon" />
              </li>
              <li>
                {movieDetails.genre.map((genre) => {
                  return (
                    <span className="details_genre" key={genre}>
                      {genre}
                    </span>
                  );
                })}
              </li>
              <li className="details_desc">{movieDetails.description}</li>
              <li>Director: {movieDetails.director}</li>
              <li>
                <a
                  className="details_trailer"
                  href={movieDetails.trailer}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Trailer
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
