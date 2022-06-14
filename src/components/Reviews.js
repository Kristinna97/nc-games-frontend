import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";
const Reviews = ({ isLoading, setLoading }) => {
  const [reviews, setReviews] = useState([]);

  const { category } = useParams();
  
  useEffect(() => {
    setLoading(true);
    fetchReviews(category).then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [category]);

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <section>
      <ul className={styles.reviews_list}>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </section>
  );
};

export default Reviews;
