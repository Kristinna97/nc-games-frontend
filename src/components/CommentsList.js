import { useEffect, useState } from "react";
import { fetchComments } from "../api";
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";
import styles from "./CommentList.module.css";
import React from 'react';

const CommentsList = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(0);
  const [deletedComment, setDeletedComment] = useState(0);
 
  useEffect(() => {
    fetchComments(review_id).then((data) => {
      setComments(data.comments.reverse());
    });
  }, [review_id, newComment ,deletedComment]);

  if (comments.length === 0) {
    return (
      <>
        {" "}
        <h4 className={styles.noComments}>No comments for this post yet :( </h4>
        <CommentForm review_id={review_id}  setNewComment={setNewComment}  />
      </>
    );
  } else {
    return (
      <>
        <CommentForm review_id={review_id} setNewComment={setNewComment} />
        <ul className={styles.comment_list}>
          {comments.map((comment) => {
            return <SingleComment comment={comment} key={comment.body} setDeletedComment={setDeletedComment}/>;
          })}
        </ul>
      </>
    );
  }
};

export default CommentsList;
