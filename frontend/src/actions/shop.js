import axios from "axios";
import { GET_PRODUCTS } from "./types";

// Getting Products
export const getProducts = () => dispatch => {
  axios
    .get("api/shop/")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
