import  styles from './ReviewCard.module.css'
const ReviewCard = ({review}) =>{
    
    return(
        <div className={styles.review_card}>
           
            <img className={styles.review_img} src={review.review_img_url} alt={review.title}></img>
             
             <p className={styles.text_block}>
                 <span className={styles.title}>{review.title}</span>
                <span>{(new Date(review.created_at)).toLocaleDateString('en-GB')}</span><span> Likes: {review.votes}</span>
                 </p>
           
        </div>
    )
}

export default ReviewCard