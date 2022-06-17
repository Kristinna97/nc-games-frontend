import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../api";
import Loading from "./Loading";
import CommentsList from "./CommentsList";
import Like from "./Like";
import styles from "./SingleReview.module.css";
import React from 'react';

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState();
  const [isLoading, setLoading] = useState(true);

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
            <p className={styles.body}>{review.review_body}</p>
            <CommentsList review_id={review_id}/>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleReview;
