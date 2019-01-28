import { createStore, combineReducers } from 'redux'

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

//store

export default () => {

  const store = createStore(combineReducers({
    posts,
    comments
  }))

  store.subscribe(() => console.log('New State-', store.getState()))

  store.dispatch(addPost({
    "id": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1467166872634,
    "title": "Udacity is the best place to learn React",
    "body": "Everyone says so after all.",
    "author": "thingtwo",
    "category": "react",
    "voteScore": 6,
    "deleted": false,
    "commentCount": 2
  }))


  store.dispatch(addComm({
    "id": "894tuq4ut84ut8v4t8wun89g",
    "parentId": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1468166872634,
    "body": "Hi there! I am a COMMENT.",
    "author": "thingtwo",
    "voteScore": 6,
    "deleted": false,
    "parentDeleted": false
  }))
}