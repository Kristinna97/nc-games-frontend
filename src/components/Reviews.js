import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";
import Loading from "./Loading";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { category } = useParams();
  
  useEffect(() => {
    setLoading(true);
    fetchReviews(category).then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [category]);

  if(isLoading){
    return  <Loading/>
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
