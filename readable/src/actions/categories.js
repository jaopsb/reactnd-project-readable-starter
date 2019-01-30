export const ADD_CAT = 'ADD_CAT'
export const DEL_CAT = 'ADD_CAT'
export const SEL_CAT = 'SEL_CAT'
export const RECIEVE_CAT = 'RECIEVE_CAT'

export const recieveCat = (categories) => ({
  type: RECIEVE_CAT,
  categories
})

export const addCat = (category) => ({
  type: ADD_CAT,
  category
})

export const selCat = (category) => ({
  type: SEL_CAT,
  category
})
