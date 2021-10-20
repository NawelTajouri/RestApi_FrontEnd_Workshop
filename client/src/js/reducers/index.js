import { ADD_USER, GET_USERS } from "../actionTypes";
const initialState = {
  users: [],
  loading : true 
}

export default (state= initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, loading: false, users: action.payload};
      
    case ADD_USER:
      return{...state, users:[action.payload ,...state.users]}
    default:
     return state;
  }
}