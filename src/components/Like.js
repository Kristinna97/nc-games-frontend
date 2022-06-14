import { useState } from "react";
import styles from "./Like.module.css";
import { increaseVotes } from "../api";
const Like = ({ id, votes }) => {
  const [updatedVotes, setUpdatedVotes] = useState(0);

  const handleClick = () => {
    increaseVotes(id, 1)
      .then((data) => {
        setUpdatedVotes((currentVotes) => currentVotes + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <span className={styles.likes}>
      {" "}
      <span className="material-symbols-rounded" onClick={handleClick}>
        favorite
      </span>
      {votes + updatedVotes}
    </span>
  );
};

export default Like;
