import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../api";
import Loading from "./Loading";
import styles from "./SingleReview.module.css";

const SingleReview = ({ isLoading, setLoading }) => {
  const { review_id } = useParams();
  const [review, setReview] = useState();

  useEffect(() => {
    setLoading(true);
    fetchReviewsById(review_id).then((data) => {
      setReview(data.review);
      setLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <Loading />;
  }
 if(review){
  return (
    <section>
      <h2>{review.title}</h2>
      <p className={styles.date}>
        {new Date(review.created_at).toLocaleDateString("en-GB")}
      </p>
      <div className={styles.reviewContent}>
        <img
          className={styles.review_img}
          src={review.review_img_url}
          alt={review.title}
        ></img>
        <div className={styles.reviewInfo}>
          <span className={styles.likes}>
            {" "}
            <span className="material-symbols-rounded">favorite</span>
            {review.votes}
         </span>
          <p className={styles.postedBy}>Posted by: {review.owner}</p>
          <p>{review.review_body}</p>
        </div>
      </div>
    </section>
  );
 }
};

export default SingleReview;
