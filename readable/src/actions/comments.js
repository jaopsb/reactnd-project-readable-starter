export const ADD_COMM = 'ADD_COMM'
export const DEL_COMM = 'ADD_COMM'

export const addComm = (comment, id) => ({
  type: ADD_COMM,
  comment,
  id
})

export const delComm = (id) => ({
  type: DEL_COMM,
  id
})