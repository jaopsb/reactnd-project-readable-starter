import { RECEIVE_COMS, ADD_COM, DEL_COM, EDIT_COM } from '../actions/comments'

export default function comments(state = [], action) {
  switch (action.type) {
    case RECEIVE_COMS:
      return [
        ...state,
        ...action.comments
      ]
    case ADD_COM:
      return [
        ...state,
        action.comment
      ]
    case DEL_COM:
      return [
        ...state.map(com => com.id !== action.id ? { ...com, deleted: true } : com)
      ]
    case EDIT_COM:
      return [
        ...state.map(comm =>
          comm.id === action.comment.id ?
            action.comment :
            comm
        )
      ]
    default:
      return state
  }
}