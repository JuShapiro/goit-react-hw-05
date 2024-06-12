import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../apiService/movies";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const trendMovies = await fetchTrendingMovies();
        setMovies(trendMovies);
      } catch (error) {
        setError(true);
        toast.error("Ooop...something going wrong...try again later");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h2>Trending Movies</h2>
      {loading && <Loader />}
      {error && <Toaster position="top-right" reverseOrder={false} />}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
