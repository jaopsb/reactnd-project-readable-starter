import { showLoading, hideLoading } from "react-redux-loading";

export const LOGIN_USER = 'ADD_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = (user) => ({
  type: LOGIN_USER,
  user
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})


export function handleLoginUser(dispatch) {
  dispatch(showLoading())
  return (user) => {
    dispatch(loginUser(user))
      .then((user) => {
        dispatch(hideLoading())
        return user
      })
  }
}