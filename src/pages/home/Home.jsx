import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../api";
import { PuffLoader } from "react-spinners";
import Movie from "../../components/movies/Movie";
import { movieLimit } from "../../constants/index";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [skip, setSkip] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const [pageCount, setPageCount] = useState([1]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        const total = data.length;
        const result = Array.from(
          { length: Math.ceil(total / movieLimit) },
          (_, i) => i + 1,
        );
        const extractedMovies = data.slice(skip, skip + movieLimit);
        setPageCount(result);
        setMovies(extractedMovies);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [skip]);

  if (error) {
    return (
      <div>
        <p className="error_txt">{error}</p>
      </div>
    );
  }
  return (
    <div className="home_wrapper">
      <div className="movies_container">
        {isLoading && <PuffLoader color="#fa6400" />}
        {movies.map((movie) => {
          return (
            <Movie
              movieId={movie.rank}
              movieImg={movie.image}
              movieTitle={movie.title}
              movieYear={movie.year}
              key={movie.rank}
            />
          );
        })}
      </div>
      <div className="pages_wrapper">
        {!isLoading &&
          pageCount.map((page) => (
            <button
              onClick={() => {
                const skipProducts = (page - 1) * movieLimit;
                setSkip(skipProducts);
                setCurrPage(page);
                window.scrollTo(0, 0);
              }}
              key={page}
              className={
                currPage === page ? "page_number active" : "page_number"
              }
            >
              {page}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Home;
