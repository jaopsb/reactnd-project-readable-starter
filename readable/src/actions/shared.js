import { recievePosts } from "./posts"
import { getInitialData } from '../API'
import { recieveCat } from "./categories";
import { showLoading, hideLoading } from 'react-redux-loading';
import { loginUser } from "./user";

const user = 'thingtwo'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ categories, posts }) => {
        dispatch(recievePosts(posts))
        dispatch(recieveCat(categories))
        dispatch(loginUser(user))
        dispatch(hideLoading())
      })
  }
}