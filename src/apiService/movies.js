import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjA5MmEzZDNkMDRkNzI2Mjg2ZDUyMGU0MGU2NWRiNSIsInN1YiI6IjY2NjA2MjIyZjY5N2JjNDExZTAwODhhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSFvWy7_8C_k0iOoQUN5Eoa7TTBCd-JXRCVQf7vXV_I",
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get("trending/movie/day", options);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await axios.get("search/movie", {
      ...options,
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movie:", error);
    throw error;
  }
};

export const movieDetails = async (id) => {
  try {
    const response = await axios.get(`movie/${id}`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const movieCredits = async (id) => {
  try {
    const response = await axios.get(`movie/${id}/credits`, options);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
};
export const movieReviews = async (id) => {
  try {
    const response = await axios.get(`movie/${id}/reviews`, options);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};
