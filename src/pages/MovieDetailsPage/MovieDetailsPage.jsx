import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { movieDetails } from "../../apiService/movies";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
import toast, { Toaster } from "react-hot-toast";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const movieData = await movieDetails(movieId);
        setMovies(movieData);
        if (movieData.poster_path) {
          setImageUrl(
            `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
          );
        }
      } catch (error) {
        setError(true);
        toast.error("Failed to fetch movie details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className={css.detailContainer}>
      <Link to={backLinkRef.current} className={css.backButton}>
        Go back
      </Link>
      {loading && <Loader />}
      {movies && (
        <div className={css.detailsWrap}>
          {imageUrl && <img src={imageUrl} alt={movies.title} width={250} />}
          <div>
            <h2 className={css.detailsText}>{movies.title}</h2>
            <p className={css.detailsText}>
              <b>Release date:</b> {movies.release_date}
            </p>
            <p className={css.detailsText}>
              <b>Overview:</b> {movies.overview}
            </p>
            <p className={css.detailsText}>
              <b>Genres:</b>{" "}
              {movies.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
      )}

      <nav className={css.detailsNav}>
        <NavLink to="cast" className={css.detailsBtn}>
          Movie Cast
        </NavLink>
        <NavLink to="reviews" className={css.detailsBtn}>
          Movie Reviews
        </NavLink>
      </nav>
      {error && <Toaster position="top-right" reverseOrder={false} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
