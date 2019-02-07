import { ADD_POST, RECIEVE_POSTS, EDIT_POST, DEL_POST } from '../actions/posts'

export default function posts(state = [], action) {
  switch (action.type) {
    case RECIEVE_POSTS:
      return [
        ...state,
        ...action.posts
      ]
    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    case EDIT_POST:
      return [
        ...state.map(post =>
          post.id === action.post.id ?
            action.post :
            post
        )
      ]
    case DEL_POST:
      return [
        ...state.map((post) =>
          post.id === action.id ?
            post.deleted = true :
            post
        )
      ]
    default:
      return state
  }
}