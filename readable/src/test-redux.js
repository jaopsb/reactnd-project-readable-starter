import { createStore, combineReducers } from 'redux'
import { getAllPosts, getComments } from './API'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

//actions
const ADD_USER = 'ADD_USER'

const ADD_POST = 'ADD_POST'
const DEL_POST = 'DEL_POST'
const EDIT_POST = 'EDIT_POST'

const ADD_COMM = 'ADD_COMM'
const DEL_COMM = 'ADD_COMM'

const ADD_CAT = 'ADD_CAT'
const DEL_CAT = 'ADD_CAT'
const SEL_CAT = 'SEL_CAT'

const addCat = (category) => ({
  type: ADD_CAT,
  category
})

const selCat = (category) => ({
  type: SEL_CAT,
  category
})

const addPost = (post) => ({
  type: ADD_POST,
  post
})

const delPost = (id) => ({
  type: DEL_POST,
  id
})

const addComm = (comment, id) => ({
  type: ADD_COMM,
  comment,
  id
})

const delComm = (id) => ({
  type: DEL_COMM,
  id
})
//reducers

const categories = (state = {}, action) => {
  switch (action.type) {
    case ADD_CAT:
      return {
        ...state,
        [action.category.id]: action.category
      }
    case DEL_CAT:
      return [
        state.filter(cat => cat.name !== action.category)
      ]
    default:
      return state
  }
}

function posts(state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    default:
      return state
  }
}

function comments(state = {}, action) {
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

//middleware
const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('The action: ', action)
  const returnValue = next(action)
  console.log('The new state: ', store.getState())
  console.groupEnd()
  return returnValue
}

const middleware = applyMiddleware(
  thunk,
  logger
)

//store

export default () => {

  const store = createStore(combineReducers({
    posts,
    comments
  }), middleware)
}