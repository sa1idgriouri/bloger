/* eslint-disable prettier/prettier */
import { Url } from "../config/config"
import querystring from "query-string"
import axios from "axios"


export const getPosts = (params) => async dispatch => {

    const query = querystring.stringify(params)


    const posts = await axios.get(`${Url}post?${query}`)



    dispatch({
        type: "GET_POSTS",
        payload: posts.data
    });
}


export const deletePost = (id) => {
    return {
        type: "DELETE_POST",
        payload: id
    }
}


export const addPost = (post) => async dispatch => {

    const newPosts = await axios.post(`${Url}post/add`, post)

    dispatch({
        type: "ADD_POST",
        payload: newPosts
    })

}