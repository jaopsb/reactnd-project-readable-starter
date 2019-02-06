import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { handleAddPost } from '../actions/posts'

class NewPost extends React.Component {
  state = {
    post: {
      title: '',
      timestamp: '',
      body: '',
      author: '',
      category: '',
      voteScore: 0,
      deleted: false,
      commentCount: 0
    }
  }

  handleCreatePost = (e) => {
    e.preventDefault()

    const { post } = this.state

    if (post.title === '' || post.body === '')
      return alert("The title nor the body can be empty!!")

    post.id = uuid()
    post.timestamp = Date.now()
    post.author = this.props.user
    post.category = this.props.category

    this.props.dispatch(handleAddPost(post))
    this.props.history.push('/')
  }

  handleTitleChange = (e) => {
    const { post } = this.state

    post.title = e.target.value

    this.setState({ post })
  }

  handleBodyChange = (e) => {
    const { post } = this.state

    post.body = e.target.value

    this.setState({ post })
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='newpost-grid'>
          <Link className="back-button" to="/" />
          <h1 className='newpost-title'>New Post in {this.props.category}</h1>
        </div>
        <div className='form-post'>
          <form onSubmit={this.handleCreatePost}>
            <div className='form-group'>
              <label htmlFor='titleInput'>Title</label>
              <input
                className='form-control'
                id='titleInput'
                type='text'
                placeholder='A Good title!!'
                value={this.state.post.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='textInput'>The Post</label>
              <textarea
                className='form-control'
                id='textInput'
                rows='3'
                placeholder='Tell your story!'
                value={this.state.post.body}
                onChange={this.handleBodyChange}
              />
            </div>
            <button
              type="submit"
              onClick={this.handleCreatePost}
              className="btn btn-light">
              Create
              </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ user }, props) {
  const { category } = props.match.params

  return {
    user,
    category
  }
}

export default withRouter(connect(mapStateToProps)(NewPost))