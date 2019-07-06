import axios from "axios";
import { GET_POSTS, DELETE_POST, ADD_POST, GET_POST } from "./types";

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

// Get Single Post
export const postDetail = slug => dispatch => {
  axios
    .get(`api/blog/${slug}/`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: slug
      });
    })
    .catch(err => console.log(err));
};

// Adding Post
export const addPost = newPost => dispatch => {
  const config = {
    headers: { "content-type": "multipart/form-data" }
  };

  axios
    .post("api/blog/", newPost, config)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
