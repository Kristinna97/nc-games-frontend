import axios from "axios";

export const fetchCategories =  () => {
    return axios.get("https://northcoders-nc-games.herokuapp.com/api/categories").then((response) =>{
       return response.data
    })
}
export const fetchReviews=  (category) => {
    return axios.get("https://northcoders-nc-games.herokuapp.com/api/reviews",{params: {category}}).then((response) =>{
    return response.data
    })
}
export const fetchReviewsById =  (id) => {
    return axios.get(`https://northcoders-nc-games.herokuapp.com/api/reviews/${id}`).then((response) =>{
    return response.data
    })
}
export const increaseVotes =  (id, inc_votes) => {
    return axios.patch(`https://northcoders-nc-games.herokuapp.com/api/reviews/${id}`,{inc_votes}).then((response) =>{
    return response.data
    })
}

export const fetchComments =  (id) => {
    return axios.get(`https://northcoders-nc-games.herokuapp.com/api/reviews/${id}/comments`).then((response) =>{
    return response.data
    })
}

export const postComment =  (id, username,text) => {
   const  options = {
        username : username,
        body :text
    }
    return axios.post(`https://northcoders-nc-games.herokuapp.com/api/reviews/${id}/comments`,options).then((response) =>{
    return response.data
    })
}