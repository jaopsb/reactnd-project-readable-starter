import React from 'react'
import { Link } from 'react-router-dom'

class Post extends React.Component {
  render() {
    const { post } = this.props

    if (!post)
      return <p>Post nao encontrado</p>

    return (
      <Link to={`/post/${post.id}`}>
        <div className='card post'>
          <div className='card-body'>
            <h3 className='card-title title'>{post.title}</h3>
            <div className='authvote'>
              <p className='author'>Created By: {post.author}</p>
              <p className='vote'>Points: {post.voteScore}</p>
            </div>
            <p className='card-text'>{post.body}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default Post