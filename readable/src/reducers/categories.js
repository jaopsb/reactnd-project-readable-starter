import { ADD_CAT, DEL_CAT, RECIEVE_CAT } from '../actions/categories'

export default function categories(state = [], action) {
  switch (action.type) {
    case RECIEVE_CAT:
      return [
        ...state,
        ...action.categories
    ]
    case ADD_CAT:
      return [
        ...state,
        action.category
      ]
    case DEL_CAT:
      return [
        state.filter(cat => cat.name !== action.category)
      ]
    default:
      return state
  }
}