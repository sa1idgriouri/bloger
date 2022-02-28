/* eslint-disable prettier/prettier */
import { combineReducers } from "redux";
import categoryReduce from "./categoryReduce";
import postReduce from "./postReduce";


export default combineReducers({
    myPosts: postReduce,
    categorys: categoryReduce
})