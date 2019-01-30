import { combineReducers } from 'redux'
import comments from './comments'
import categories from './categories'
import posts from './posts'

export default combineReducers({
  comments,
  posts,
  categories
})