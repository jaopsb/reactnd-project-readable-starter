import React from 'react'


const Post = ({ title, body }) => (
  <div >
    <h5>{title}</h5>
    <p style={{ paddingLeft: '10px' }}>{body}</p>
  </div>
)

const Posts = ({ posts }) => (
  <div className='comments'>
    <h3>Posts</h3>
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
)

export default Posts