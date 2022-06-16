import styles from "./MobileNav.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React  from 'react';
const MobileNav = ({ categories }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(`/reviews/category/${event.target.value}`);
  };

  return (
    <>
      <div className={styles.mobile_nav}>
        <Link className={styles.links} to={`/`} key="home">
          HOME
        </Link>
        <Link className={styles.links} to={`/reviews`} key="all-reviews">
          ALL REVIEWS
        </Link>
        <select onChange={(event) => handleClick(event)}>
        <option value="" selected disabled hidden>Choose category</option>
          {categories.map((category) => {
            return (
              <option value={category.slug} key={category.slug}>
                {category.slug.replaceAll("-", " ").toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default MobileNav;
