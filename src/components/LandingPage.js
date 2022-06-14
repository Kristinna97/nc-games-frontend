import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import styles from './LandingPage.module.css'
const LandingPage = ({isLoading, setLoading}) => {

const [reviews , setReviews]  = useState([])

useEffect(() => {
    fetchReviews().then(({reviews}) => {
        setLoading(true)
        setReviews(reviews.slice(0,6))
        setLoading(false)
    })
},[])

if(isLoading){
        return<p>loading...</p>
}
return(
  
    <section className={styles.reviews}>
        <ul className={styles.reviews_list}>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
   
        </ul>
        <Link
                className="links"
                to={`/reviews`}
                key="all-reviews"
              ><button>All reviews</button></Link> 
        
        </section>
)
}

export default LandingPage;