/* eslint-disable prettier/prettier */
const initailState = {
    Posts: []
}


export default function PostReduce(state = initailState, action) {
    switch (action.type) {

        case "GET_POSTS":
            console.log("action")
            return {
                ...state,
                Posts: action.payload
            };
        case "DELETE_POST":
            return {
                ...state,
                Posts: state.Posts.filter(post => post.id !== action.payload)
            }
        case "ADD_POST":
            return {
                ...state,
                Posts: [action.payload, ...state.Posts]
            }

        default:
            return state
    }
}