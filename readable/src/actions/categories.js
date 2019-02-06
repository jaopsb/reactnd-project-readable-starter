export const ADD_CAT = 'ADD_CAT'
export const DEL_CAT = 'ADD_CAT'
export const RECIEVE_CAT = 'RECIEVE_CAT'

export const recieveCat = (categories) => ({
  type: RECIEVE_CAT,
  categories
})
