import { ADD_POST, RECIEVE_POSTS, EDIT_POST, DEL_POST, SORT_POST, VOTE_UP, VOTE_DOWN, TIME_UP, TIME_DOWN } from '../actions/posts'

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
        ...state.map(post => post.id === action.id ? { ...post, deleted: true } : post)
      ]
    case SORT_POST:
      switch (action.sort) {
        case VOTE_UP:
          return [
            ...state.sort((a, b) => b.voteScore - a.voteScore)
          ]
        case VOTE_DOWN:
          return [
            ...state.sort((a, b) => a.voteScore - b.voteScore)
          ]
        case TIME_UP:
          return [
            ...state.sort((a, b) => b.timestamp - a.timestamp)
          ]
        case TIME_DOWN:
          return [
            ...state.sort((a, b) => a.timestamp - b.timestamp)
          ]
        default:
          return state
      }
    default:
      return state
  }
}