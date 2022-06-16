import styles from "./ReviewCard.module.css";
import Like from "./Like";
import { Link } from "react-router-dom";
import React from 'react';
const ReviewCard = ({ review }) => {
  return (
    <div className={styles.review_card}>
      <img
        className={styles.review_img}
        src={review.review_img_url}
        alt={review.title}
      ></img>
      <div className={styles.text_block}>
        <h3 className={styles.title}>{review.title}</h3>
        <p className={styles.review_info}>
          <span>{new Date(review.created_at).toLocaleDateString("en-GB")}</span>
        <Like votes={review.votes} id={review.review_id}/>
        </p>
        <Link
          className={styles.links}
          to={`/reviews/${review.review_id}`}
          key="view more"
        >
          <button className={styles.viewMore}>View more {">>"} </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
