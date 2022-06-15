import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import styles from './LandingPage.module.css'

const LandingPage = () => {

const [reviews , setReviews]  = useState([])
const [isLoading, setLoading] = useState(true);

useEffect(() => {
    fetchReviews().then(({reviews}) => {
        setLoading(true)
        setReviews(reviews.slice(0,6))
        setLoading(false)
    })
},[])

if(isLoading){
      return  <Loading/>
}
return(
  
    <section className={styles.reviews}>
        <ul className={styles.reviews_list}>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
   
        </ul>
        <Link
                className={styles.links}
                to={`/reviews`}
                key="all-reviews"
              >
                <button className={styles.allRevBtn}>ALL REVIEWS</button></Link> 
        
        </section>
)
}

export default LandingPage;