import { GET_TEXT } from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
    case GET_TEXT:
      return {
        state,
        info: action.payload
      }
    default:
      return state;
  }
}