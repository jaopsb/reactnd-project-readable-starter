import { recievePosts } from "./posts"
import { getInitialData } from '../API'
import { recieveCat } from "./categories";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ categories, posts }) => {
        dispatch(recievePosts(posts))
        dispatch(recieveCat(categories))
      })
  }
}