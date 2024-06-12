import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviews } from "../../apiService/movies";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";
import toast, { Toaster } from "react-hot-toast";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const reviewData = await movieReviews(movieId);
        setReview(reviewData);
      } catch (error) {
        setError(true);
        toast.error("Failed to fetch movie reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <Toaster position="top-right" reverseOrder={false} />}
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id} className={css.reviewItem}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </>
  );
};

export default MovieReviews;
