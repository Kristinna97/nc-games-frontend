import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../api";
import Loading from "./Loading";
import Like from "./Like";
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
  if (review) {
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
            <Like id={review.review_id} votes={review.votes} />
            <p className={styles.postedBy}>Posted by: {review.owner}</p>
            <p>{review.review_body}</p>
            <p className={styles.comments}>
              <span class="material-symbols-outlined">forum</span>{" "}
              {review.comment_count}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleReview;
