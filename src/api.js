import axios from "axios";

export const fetchCategories =  () => {
    return axios.get("https://northcoders-nc-games.herokuapp.com/api/categories").then((response) =>{
       return response.data
    })
}