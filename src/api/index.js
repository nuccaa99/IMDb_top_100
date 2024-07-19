const url = "https://imdb-top-100-movies.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_HOST,
  },
};

export async function fetchMovies() {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
}

export async function fetchMovie(id) {
  const movieUrl = `https://imdb-top-100-movies.p.rapidapi.com/top${id}`;
  try {
    const response = await fetch(movieUrl, options);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
}
