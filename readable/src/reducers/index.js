import { combineReducers } from 'redux'
import comments from './comments'
import categories from './categories'
import posts from './posts'
import user from './user'
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  comments,
  posts,
  user,
  categories,
  loadingBar: loadingBarReducer

})