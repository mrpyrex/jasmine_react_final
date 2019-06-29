import axios from "axios";
import { GET_PICS } from "./types";

// Getting Posts
export const getPics = () => dispatch => {
  axios
    .get("api/gallery/")
    .then(res => {
      dispatch({
        type: GET_PICS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
