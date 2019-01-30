import { ADD_COMM } from '../actions/comments'

export default function comments(state = {}, action) {
  switch (action.type) {
    case ADD_COMM:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    default:
      return state
  }
}