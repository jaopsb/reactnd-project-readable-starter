import { combineReducers } from 'redux'
import comments from './comments'
import categories from './categories'
import posts from './posts'
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  comments,
  posts,
  categories,
  loadingBar: loadingBarReducer

})