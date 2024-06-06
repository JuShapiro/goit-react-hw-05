import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultImage = "https://i.imgur.com/YFPCI0O.jpeg";
  return (
    <div className={css.movieBox}>
      {movies.map(({ id, title, poster_path }) => {
        const urlImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
        return (
          <div key={id} className={css.movieList}>
            <Link state={location} to={`/movies/${id}`}>
              <img
                src={poster_path ? urlImage : defaultImage}
                alt={title}
                width={250}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
