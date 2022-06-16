import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";
import Loading from "./Loading";
import SortingMenu from "./SortindMenu";
import React  from 'react';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const params = {sort_by: searchParams.get("sort_by"),
                  order: searchParams.get("order")}

  const { category } = useParams();
  useEffect(() => {
    setLoading(true);
    fetchReviews(category, params).then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [category, searchParams]);

  if(isLoading){
    return  <Loading/>
}
  return (
    <section>
      <div className={styles.sorting}><SortingMenu /></div>
      
      <ul className={styles.reviews_list}>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </section>
  );
};

export default Reviews;
