import styles from "./ReviewCard.module.css";
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
          <span className={styles.likes}>
            <span className="material-symbols-rounded">favorite</span>
            {review.votes}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
