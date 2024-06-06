import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import movieCredits from "../../apiService/movies";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      setLoading(true);
      try {
        const castData = await movieCredits(movieId);
        setCast(castData);
      } catch (error) {
        setError(true);
        toast.error("Please try again later");
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const defaultActorImg = "https://i.imgur.com/YFPCI0O.jpeg";

  return (
    <>
      {loading && <Loader />}
      {error && <Toaster position="top-right" reverseOrder={false} />}
      <ul className={css.castList}>
        {cast.map(({ id, original_name, profile_path, character }) => {
          const urlImage = `https://image.tmdb.org/t/p/w500${profile_path}`;
          return (
            <li key={id} className={css.castListItem}>
              <img
                src={profile_path ? urlImage : defaultActorImg}
                alt={original_name}
                width={250}
              />
              <h3>{original_name}</h3>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieCast;
