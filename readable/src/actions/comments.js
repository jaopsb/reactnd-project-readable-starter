import { showLoading, hideLoading } from "react-redux-loading";
import { getComments, editComm, handleVote, delComm, createComm } from "../API";

export const RECEIVE_COMS = 'RECEIVE_COMS'
export const DEL_COM = 'DEL_COMS'
export const EDIT_COM = 'EDIT_COM'
export const ADD_COM = 'ADD_COM'
export const CLN_COM = 'CLN_COM'

export const receiveCom = (comments) => ({
  type: RECEIVE_COMS,
  comments
})

export const addCom = (comment) => ({
  type: ADD_COM,
  comment
})

export const editCom = (comment) => ({
  type: EDIT_COM,
  comment
})

export const delCom = (id) => ({
  type: DEL_COM,
  id
})

export const cleanCom = () => ({
  type: CLN_COM
})

export function handleReceiveComm(id) {
  return function (dispatch) {
    dispatch(showLoading())
    return getComments(id)
      .then(comments => dispatch(receiveCom(comments)))
      .then(comments => {
        dispatch(hideLoading())
        return comments
      })
  }
}

export function handleCreateComm(comment) {
  return function (dispatch) {
    dispatch(showLoading())
    return createComm(comment)
      .then(comment => dispatch(addCom(comment)))
      .then(action => {
        dispatch(hideLoading())
        return action.comment
      })
  }
}

export function handleEditCom(comment) {
  return function (dispatch) {
    dispatch(showLoading())
    return editComm(comment)
      .then(comment => dispatch(editCom(comment)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleVoteComm(comment, option, type) {
  return function (dispatch) {
    dispatch(showLoading())
    return handleVote(comment.id, option, type)
      .then((comment) => dispatch(editCom(comment)))
      .then((action) => {
        dispatch(hideLoading())
        return action.comment
      })
  }
}

export function handleDelComm(id) {
  return function (dispatch) {
    dispatch(showLoading())
    return delComm(id)
      .then(comment => dispatch(delCom(comment.id)))
      .then(() => dispatch(hideLoading()))
  }
}