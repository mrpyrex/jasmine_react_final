import { combineReducers } from "redux";
import contacts from "./contacts";
import posts from "./posts";
import pics from "./gallery";
import products from "./shop";

export default combineReducers({ contacts, posts, pics, products });
