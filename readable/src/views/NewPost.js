import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { handleAddPost, handleEditPost, handleDelPost } from '../actions/posts'

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

  componentDidMount = () => {
    const { post } = this.props

    if (post)
      this.setState({ post })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { post } = this.state

    if (post.title === '' || post.body === '')
      return alert("The title nor the body can be empty!!")

    if (this.props.type === 'Create') {

      post.id = uuid()
      post.timestamp = Date.now()
      post.author = this.props.user
      post.category = this.props.category

      this.props.dispatch(handleAddPost(post))
      this.props.history.push('/')
    }

    if (this.props.type === 'Edit') {
      const resp = window.confirm("Confirm editing?")

      if (resp) {
        this.props.dispatch(handleEditPost(post))
        this.props.history.push('/')
      }
    }
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

  handleDelPost = () => {

    const { post } = this.state

    console.log(this.state)

    const resp = window.confirm("Are you really going to delete this post??")

    if (resp) {
      this.props.dispatch(handleDelPost(post.id))
      this.props.history.push('/')
    }

  }

  render() {

    return (
      <div className='container-fluid'>
        <div className='newpost-grid'>
          <Link className="back-button" to="/" />
          {
            this.props.type === 'Create' &&
            <h1 className='newpost-title'>New Post in {this.props.category}</h1>
          }
          {
            this.props.type === 'Edit' &&
            <h1 className='newpost-title'>Edit Post</h1>
          }
        </div>
        <div className='form-post'>
          <form onSubmit={this.handleSubmit}>
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
            <div className='btn-form-container'>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-light btn-type-submit">
                {this.props.type}
              </button>
              <button
                type="button"
                onClick={this.handleDelPost}
                className="btn btn-danger btn-form-delete">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ user, posts }, props) {
  const { category, id } = props.match.params

  return {
    user,
    category,
    post: id ? posts.find(post => post.id === id) : null,
    type: id ? 'Edit' : 'Create'
  }
}

export default withRouter(connect(mapStateToProps)(NewPost))