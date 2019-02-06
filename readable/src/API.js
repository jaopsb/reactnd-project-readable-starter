
import axios from 'axios'

export const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export function getUser() {
  return localStorage.user
}

export function setUser(user) {
  localStorage.user = user
}

export function getInitialData() {
  return Promise.all([
    getAllCategories(),
    getAllPosts(),
  ]).then(([categories, posts]) => ({
    categories,
    posts,
  }))
}

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getComments = (id) =>
  axios({
    method: 'get',
    url: `${api}/posts/${id}/comments`,
    data: id,
    headers
  })
    .then(res => res.data)
    .catch(err => console.log("ERROR API", err))


export const createComm = (comment) =>
  axios({
    method: 'post',
    url: `${api}/comments`,
    data: comment,
    headers
  })
    .then(res => res.data)
    .catch(err => console.log("ERROR API", err))


export const handleVote = (id, option, type) =>
  axios({
    method: 'post',
    url: `${api}/${type}/${id}`,
    data: { option },
    headers
  })
    .then(res => res.data)
    .catch(err => console.log("ERROR API", err))

export const createPost = (post) =>
  axios({
    method: 'post',
    url: `${api}/posts`,
    data: post,
    headers
  })
    .then(res => res.data)
    .catch(err => console.log("ERROR API", err))

export const deletePost = (id) =>
  axios.delete(`${api}/posts/${id}`, { headers })
    .then(res => res.data)
    .catch(err => err)
