import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjA5MmEzZDNkMDRkNzI2Mjg2ZDUyMGU0MGU2NWRiNSIsInN1YiI6IjY2NjA2MjIyZjY5N2JjNDExZTAwODhhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSFvWy7_8C_k0iOoQUN5Eoa7TTBCd-JXRCVQf7vXV_I",
  },
};

const fetchTrendingMovies = () => {
  axios
    .get("trending/movie/day", options)
    .then((response) => {
      console.log(response);
      return response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
};

const searchMovie = (query) => {
  axios
    .get(`search/movie/?query=${query}`, options)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
};

const movieDetails = (movie_id) => {
  axios
    .get(`movie/${movie_id}`, options)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
};

const movieCredits = (movie_id) => {
  axios
    .get(`movie/${movie_id}/credits`, options)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
};
const movieReviews = (movie_id) => {
  axios
    .get(`movie/${movie_id}/reviews`, options)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.error(error);
    });
};
export default {
  fetchTrendingMovies,
  searchMovie,
  movieDetails,
  movieCredits,
  movieReviews,
};
