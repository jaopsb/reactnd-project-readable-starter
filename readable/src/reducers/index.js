import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import user from './user'
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  posts,
  user,
  categories,
  loadingBar: loadingBarReducer

})