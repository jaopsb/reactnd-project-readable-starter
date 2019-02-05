import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleDelPost } from '../actions/posts';

class Post extends React.Component {

  deletePost = () => {
    console.log('deletando post')
    handleDelPost(this.props.post.id)

    this.props.history.push('/')
  }

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
            {
              !this.props.listView &&
              this.props.user === post.author &&
              <button
                className='btn btn-danger float-right'
                onClick={this.deletePost}>
                Delete Post
              </button>
            }
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps({ user }) {
  return {
    user
  }
}

export default withRouter(connect(mapStateToProps)(Post))