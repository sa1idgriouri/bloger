/* eslint-disable prettier/prettier */
import querystring from "query-string"
import { Url } from "../../config/config"
import axios from "axios"

export const getPosts = (params) => {

    const query = querystring.stringify(params)

    return fetch(`${Url}post?${query}`)
        .then(res => res.json())

}


export const getCategory = () => {
    return fetch(`${Url}categorie`)
        .then(res => res.json())
}

export const addComment = async (comment) => {
    const res = await axios.post(`${Url}comment/add`, comment)
    if (res) {
        return "Bien ajoute"
    }
}

export const getComments = (idPost) => {
    return fetch(`${Url}comment/${idPost}`)
        .then(res => res.json())
}

export const getAllComments = () => {
    return fetch(`${Url}comment`)
        .then(res => res.json())
}