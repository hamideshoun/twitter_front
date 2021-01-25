import { RECEIVE_ACTIVITIES } from "../actions/activities";

//creating the user reducer
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return {
        ...state,
        ...action.activities
      };

    default:
      return state;
  }
}