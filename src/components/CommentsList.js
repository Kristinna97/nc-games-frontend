import { useEffect, useState } from "react"
import { fetchComments } from "../api"
import SingleComment from "./SingleComment"
import styles from './CommentList.module.css'

const CommentsList = ({review_id}) => {

    const [comments, setComments] = useState()

    useEffect(() =>{
        fetchComments(review_id).then((data) => {
            setComments(data.comments)
        })
    },[review_id])
    
 if(comments){
    return <> <ul className={styles.comment_list}>
    {comments.map((comment )=> {
  return  <SingleComment comment={comment} key={comment.body}/>
    })}
 </ul>
 </>
 }  

}

export default CommentsList