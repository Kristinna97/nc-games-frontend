import { Button } from "react-bootstrap";
import React from "react";
import { deleteComment } from "../api";



const DeleteComment = ({comment_id, setDeletedComment , setDeleted}) =>{
    

    const handleDelete =(event) =>{
        setDeleted(true)
        event.target.disabled = true;
        deleteComment(comment_id).then(()=>{
            setDeletedComment((current) => current +1)
        })
       
      
     }
return(
    <Button variant="danger" disabled={false}  onClick={handleDelete}
    size="sm" className="mt-2">Delete</Button>
)
}

export default DeleteComment;