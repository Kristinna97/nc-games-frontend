import axios from "axios";

export const fetchCategories =  () => {
    return axios.get("https://northcoders-nc-games.herokuapp.com/api/categories").then((response) =>{
       return response.data
    })
}
export const fetchReviews=  () => {
    return axios.get("https://northcoders-nc-games.herokuapp.com/api/reviews").then((response) =>{
       return response.data
    })
}