import {
  GET_POSTS,
  DELETE_POST,
  ADD_POST,
  GET_POST
} from "../actions/types.js";

const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_POST:
      return {
        ...state,
        post: state.post.filter(post => post.slug == action.payload)
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
}
