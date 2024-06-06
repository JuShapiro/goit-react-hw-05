import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjA5MmEzZDNkMDRkNzI2Mjg2ZDUyMGU0MGU2NWRiNSIsInN1YiI6IjY2NjA2MjIyZjY5N2JjNDExZTAwODhhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSFvWy7_8C_k0iOoQUN5Eoa7TTBCd-JXRCVQf7vXV_I",
  },
};

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get("trending/movie/day", options);
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

const searchMovie = async (query) => {
  const response = await axios.get(`search/movie/?query=${query}`, options);
  return response.data.results;
};

const movieDetails = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}`, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

const movieCredits = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}/credits`, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
const movieReviews = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}/reviews`, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
export default {
  fetchTrendingMovies,
  searchMovie,
  movieDetails,
  movieCredits,
  movieReviews,
};
