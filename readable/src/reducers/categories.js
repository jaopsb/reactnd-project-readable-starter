import { RECIEVE_CAT } from '../actions/categories'

export default function categories(state = [], action) {
  switch (action.type) {
    case RECIEVE_CAT:
      return [
        ...state,
        ...action.categories
      ]
    default:
      return state
  }
}