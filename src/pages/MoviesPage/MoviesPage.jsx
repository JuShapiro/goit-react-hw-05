import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import searchMovie from "../../apiService/movies";
import toast, { Toaster } from "react-hot-toast";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("query") || "";
    if (!searchQuery) return;
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const results = await searchMovie.searchMovie(searchQuery);
        setMovies(results);
      } catch (error) {
        setError(true);
        toast.error("Ooop...something going wrong...try again later");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchParams]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <Toaster position="top-right" reverseOrder={false} />}
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
