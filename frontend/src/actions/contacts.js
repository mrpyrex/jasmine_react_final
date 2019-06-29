import axios from "axios";
import { ADD_CONTACT } from "./types";

// ADDING CONTACTS
export const addContact = newContact => dispatch => {
  axios
    .post("/api/contact/", newContact)
    .then(res => {
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
