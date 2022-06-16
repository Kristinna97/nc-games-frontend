import { useState } from "react";
import styles from "./Like.module.css";
import { increaseVotes } from "../api";
import React  from 'react';
const Like = ({ id, votes }) => {
  const [updatedVotes, setUpdatedVotes] = useState(0);

  const handleClickUp = () => {
    setUpdatedVotes((currentVotes) => currentVotes + 1);
    increaseVotes(id, 1).catch(() => {
      setUpdatedVotes((currentVotes) => currentVotes - 1);
    });
  };

  const handleClickDown = () => {
    setUpdatedVotes((currentVotes) => currentVotes - 1);
    increaseVotes(id, -1).catch(() => {
      setUpdatedVotes((currentVotes) => currentVotes + 1);
    });
  };

  return (
    <span className={styles.likes}>
      {" "}
      <span className="material-symbols-outlined" onClick={handleClickUp}>
        thumb_up
      </span>
     
     <span className={styles.votes}> {votes + updatedVotes} </span>
      <span className="material-symbols-outlined" onClick={handleClickDown}>
        thumb_down
      </span>
    </span>
  );
};

export default Like;
