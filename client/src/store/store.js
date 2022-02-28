/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware, compose } from "redux";
import createReducer from "../reduces"
import thunk from "redux-thunk";

const initailState = {}

const store = createStore(createReducer, initailState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store

