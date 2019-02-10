import { showLoading, hideLoading } from "react-redux-loading";
import { createPost, deletePost, handleVote, updatePost } from "../API";

export const ADD_POST = 'ADD_POST'
export const DEL_POST = 'DEL_POST'
export const EDIT_POST = 'EDIT_POST'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'
export const SORT_POST = 'SORT_POST'

export const VOTE_UP = 'VOTE_UP'
export const VOTE_DOWN = 'VOTE_DOWN'
export const TIME_UP = 'TIME_UP'
export const TIME_DOWN = 'TIME_DOWN'

export const recievePosts = (posts) => ({
  type: RECIEVE_POSTS,
  posts
})

export const addPost = (post) => ({
  type: ADD_POST,
  post
})

export const delPost = (id) => ({
  type: DEL_POST,
  id
})

export const editPost = (post) => ({
  type: EDIT_POST,
  post
})

export const sortPosts = (sort) => ({
  type:SORT_POST,
  sort
})

export function handleAddPost(post) {
  return function (dispatch) {
    dispatch(showLoading())
    return createPost(post)
      .then(post => dispatch(addPost(post)))
      .then((post) => {
        dispatch(hideLoading())
        return post
      })
  }
}

export function handleEditPost(post) {
  return function (dispatch) {
    dispatch(showLoading())
    return updatePost(post)
      .then(post => dispatch(editPost(post)))
      .then((post) => {
        dispatch(hideLoading())
        return post
      })
  }
}

export function handleDelPost(id) {
  return function (dispatch) {
    dispatch(showLoading())
    return deletePost(id)
      .then(post => dispatch(delPost(post.id)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleVotePost(post, option, type) {
  return function (dispatch) {
    dispatch(showLoading())
    return handleVote(post.id, option, type)
      .then((post) => dispatch(editPost(post)))
      .then((post) => {
        dispatch(hideLoading())
        return post
      })
  }
}