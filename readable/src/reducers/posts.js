import { ADD_POST, RECIEVE_POSTS } from '../actions/posts'

export default function posts(state = [], action) {
  switch (action.type) {
    case RECIEVE_POSTS:
      return [
        ...state,
        ...action.posts
    ]
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    default:
      return state
  }
}