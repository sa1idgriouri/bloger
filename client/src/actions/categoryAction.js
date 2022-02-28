/* eslint-disable prettier/prettier */
import { Url } from "../config/config"
import axios from "axios"

export const getCategory = () => async dispatch => {
    const res = await axios.get(`${Url}categorie`)


    dispatch({
        type: "GET_CATEGORY",
        payload: res.data
    })


}

export const deleteCategory = (id) => async dispatch => {

    const res = await axios.delete(`${Url}categorie/${id}`)


    dispatch({
        type: "DELETE_CATEGORY",
        payload: id
    })
}


export const addCategory = (category) => async dispatch => {

    const res = await axios.post(`${Url}categorie/add`, category)

    dispatch({
        type: "ADD_CATEGORY",
        payload: res
    })

}