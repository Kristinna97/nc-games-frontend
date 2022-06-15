import { useState, useContext } from "react";
import { postComment } from "../api";
import { UserContext } from "../context/userContext";
import styles from "./CommentForm.module.css";

const CommentForm = ({ review_id, setNewComment }) => {
  const [commentText, setCommentText] = useState("");
  const { user } = useContext(UserContext);
  const [posted, setPosted] = useState(false);

  const handleSubmit = (event) => {
    setPosted(true);
    event.preventDefault();
    postComment(review_id, user.username, commentText).then(() => {
      setNewComment((current) => current + 1);
    });

    setCommentText("");
  };

  setTimeout(() => {
    setPosted(false);
  }, "5000");

  if (posted) {
    return (
      <>
        {" "}
        <p className={styles.successMsg}>Comment  posted  successfully!</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            placeholder="Write a new comment..."
            className={styles.textarea}
            required
            onChange={(event) => setCommentText(event.target.value)}
            value={commentText}
          ></textarea>
          <button className={styles.send}>
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
       
      </>
    );
  }

  if (user) {
    return (
      <>
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            placeholder="Write a new comment..."
            className={styles.textarea}
            required
            onChange={(event) => setCommentText(event.target.value)}
            value={commentText}
          ></textarea>
          <button className={styles.send}>
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </>
    );
  } else {
    return (
      <h4 className={styles.noUser}>
        You need to be logged in to post a comment{" "}
      </h4>
    );
  }
};

export default CommentForm;
