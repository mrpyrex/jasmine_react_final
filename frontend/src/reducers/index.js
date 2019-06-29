import { combineReducers } from "redux";
import contacts from "./contacts";
import posts from "./posts";

export default combineReducers({ contacts, posts });
