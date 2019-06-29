import { GET_PICS } from "../actions/types.js";

const initialState = {
  pics: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PICS:
      return {
        ...state,
        pics: action.payload
      };
    default:
      return state;
  }
}
