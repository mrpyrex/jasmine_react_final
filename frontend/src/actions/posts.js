import axios from "axios";
import { GET_POSTS, DELETE_POST, ADD_POST } from "./types";

// Getting Posts
export const getPosts = () => dispatch => {
  axios
    .get("api/blog/")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Deleting Posts

export const deletePost = id => dispatch => {
  axios
    .delete(`api/blog/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Adding Post
export const addPost = newPost => dispatch => {
  axios
    .post("api/blog/", newPost)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
