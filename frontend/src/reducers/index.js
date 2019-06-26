import { combineReducers } from "redux";
import contacts from "./contact";
import posts from "./posts";

export default combineReducers({ contacts, posts });
