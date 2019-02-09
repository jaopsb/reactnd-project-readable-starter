import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import user from './user'
import comments from './comments'
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  posts,
  user,
  comments,
  categories,
  loadingBar: loadingBarReducer
})