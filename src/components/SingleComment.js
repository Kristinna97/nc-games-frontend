import styles from "./SingleComment.module.css";
import React from 'react';
const SingleComment = ({ comment }) => {
  return (
    <li className={styles.comment}>
      <p className={styles.author}>
        <span className="material-symbols-outlined">account_circle</span>
       <span className={styles.username}>{comment.author}</span> 
      </p>
      <p className={styles.body}>{comment.body}</p>
      <p className={styles.date}>{comment.created_at.slice(0,10)}</p>
    </li>
  );
};

export default SingleComment;
