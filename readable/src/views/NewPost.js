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
    return alert("Nem titulo nem o corpo podem estar vazios!!")
    
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
          <Link className="close-search" to="/" />
          <h1 className='newpost-title'>Write New Post</h1>
        </div>
        <div className='form-post'>
          <form onSubmit={this.handleCreatePost}>
            <div className='form-group'>
              <label htmlFor='titleInput'>Titulo</label>
              <input
                className='form-control'
                id='titleInput'
                type='text'
                placeholder='Um titulo interessante'
                value={this.state.post.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='textInput'>O Post</label>
              <textarea
                className='form-control'
                id='textInput'
                rows='3'
                placeholder='Conte sua história!'
                value={this.state.post.body}
                onChange={this.handleBodyChange}
              />
            </div>
            <button
              type="submit"
              onClick={this.handleCreatePost}
              className="btn btn-light">
              Criar
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