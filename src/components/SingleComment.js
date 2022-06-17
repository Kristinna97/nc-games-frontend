import styles from "./SingleComment.module.css";
import React from 'react';
import DeleteComment from "./DeleteComment";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const SingleComment = ({ comment , setDeletedComment, setDeleted}) => {

  const { user } = useContext(UserContext);

  return (
    <li className={styles.comment}>
      <p className={styles.author}>
        <div className={styles.icon}>
      <span className="material-symbols-outlined">account_circle</span>
       <span className={styles.username}>{comment.author}</span> </div>
       <div className={styles.deleteBtn}>
       {comment.author === user.username ?
       <DeleteComment comment_id = {comment.comment_id} setDeletedComment={setDeletedComment} setDeleted={setDeleted}/> :null}
       </div>
      </p>     
       
      <p className={styles.body}>{comment.body}</p>
      <p className={styles.date}>{comment.created_at.slice(0,10)}</p>
    </li>
  );
};

export default SingleComment;
