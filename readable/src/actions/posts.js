import { showLoading, hideLoading } from "react-redux-loading";
import { createPost, deletePost } from "../API";

export const ADD_POST = 'ADD_POST'
export const DEL_POST = 'DEL_POST'
export const EDIT_POST = 'EDIT_POST'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'

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

export function handleAddPost(post) {
  return function (dispatch) {
    dispatch(showLoading())
    return createPost(post)
      .then(post => dispatch(addPost(post)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleDelPost(id) {
  return function (dispatch) {
    dispatch(showLoading())
    return deletePost(id)
      .then(id => dispatch(delPost(id)))
      .then(() => dispatch(hideLoading()))
  }
}