import axios from "axios";
import { ADD_CONTACT } from "./types";

// ADDING CONTACTS
export const addContact = newContact => dispatch => {
  const config = {
    headers: { "content-type": "multipart/form-data" }
  };

  axios
    .post("/api/contact/", newContact, config)
    .then(res => {
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
