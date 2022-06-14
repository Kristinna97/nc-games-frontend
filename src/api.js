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