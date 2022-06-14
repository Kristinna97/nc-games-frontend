import  styles from './ReviewCard.module.css'
const ReviewCard = ({review}) =>{
    
    return(
        <div className={styles.review_card}>
            <h3 className={styles.title}>{review.title}</h3>
            <img className={styles.review_img} src={review.review_img_url} alt={review.title}></img>
             <p className={styles.review_info}><span>{(new Date(review.created_at)).toLocaleDateString('en-GB')}</span><span> Likes: {review.votes}</span> </p>
           
        </div>
    )
}

export default ReviewCard