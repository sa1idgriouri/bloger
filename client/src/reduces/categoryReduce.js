/* eslint-disable prettier/prettier */

const initailState = {
    Categories: []
}

export default function categoryReduce(state = initailState, action) {
    switch (action.type) {

        case "GET_CATEGORY":
            return {
                ...state,
                Categories: action.payload
            }
        case "DELETE_CATEGORY":
            return {
                ...state,
                Categories: state.Categories.filter(category => category.id !== action.payload)
            }
        case "ADD_CATEGORY":
            return {
                ...state,
                Categories: [action.payload, ...state.Categories]
            }
        default:
            return state

    }
}