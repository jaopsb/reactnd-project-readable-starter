import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { handleAddPost, handleEditPost, handleDelPost } from '../actions/posts'
import Select from '../components/Select';

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
    },
    categorySelected: '',
    msg: ''
  }

  componentDidMount() {
    const { id, posts, post, category, categories } = this.props

    if (id && posts)
      if (posts.find(pst => pst.id === id) === undefined)
        return this.setState({ msg: 'This Post Doesn\'t exist!!!' })

    if (post) {
      this.setState({ post, categorySelected: post.category })
    } else {
      if (categories.length > 0)
        this.setState({ categorySelected: category ? category : categories[0].name })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { id, post, posts, category, categories } = nextProps

    console.log('nextProps', nextProps)

    if (id && posts)
      if (posts.find(pst => pst.id === id) === undefined)
        this.setState({ msg: 'This Post Doesn\'t exist!!!' })

    if (post) {
      this.setState({ post, categorySelected: post.category })
    } else {
      if (categories.length > 0)
        this.setState({ categorySelected: category ? category : categories[0].name })
    }
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
      post.category = this.state.categorySelected

      this.props.dispatch(handleAddPost(post))
        .then(() => this.props.history.push(`/${post.category}/${post.id}`))
    }

    if (this.props.type === 'Edit') {

      const resp = window.confirm("Confirm editing?")

      if (resp) {

        post.category = this.state.categorySelected

        this.props.dispatch(handleEditPost(post))
          .then(() => this.props.history.push('/'))
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

    const resp = window.confirm("Are you really going to delete this post??")

    if (resp) {
      this.props.dispatch(handleDelPost(post.id))
        .then(() => this.props.history.push('/'))
    }
  }

  handleChangeCategory = (e) => {
    this.setState({ categorySelected: e.target.value })
  }

  render() {
    const { post, msg } = this.state

    return (
      <div className='container-fluid'>
        {
          msg !== '' ?
            <div>
              <Link className='back-button' to='/' />
              <h1>{msg}</h1>
            </div> :
            <React.Fragment>
              <div className='newpost-grid'>
                <Link className="back-button" to={post ? `/${post.category}/${post.id}` : '/'} />
                {
                  this.props.type === 'Create' &&
                    this.props.category ?
                    <h1 className='newpost-title'>New Post in {this.props.category}</h1> :
                    this.props.type === 'Create' && <h1 className='newpost-title'>New Post</h1>
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
                      className='form-control text-area-new-post'
                      id='textInput'
                      rows='3'
                      placeholder='Tell your story!'
                      value={this.state.post.body}
                      onChange={this.handleBodyChange}
                    />
                    <Select
                      options={this.props.categories}
                      onChange={this.handleChangeCategory}
                      selected={this.state.categorySelected} />
                  </div>
                  <div className='btn-form-container'>
                    <button
                      type="submit"
                      onClick={this.handleSubmit}
                      className="btn btn-light btn-type-submit">
                      {this.props.type}
                    </button>
                    {
                      this.props.type === 'Edit' &&
                      <button
                        type="button"
                        onClick={this.handleDelPost}
                        className="btn btn-danger">
                        Delete
                     </button>
                    }
                  </div>
                </form>
              </div>
            </React.Fragment>
        }
      </div>
    )
  }
}

function mapStateToProps({ user, posts, categories }, props) {
  const { category, id } = props.match.params

  return {
    id,
    user,
    category,
    posts,
    post: id ? posts.find(post => post.id === id) : null,
    type: id ? 'Edit' : 'Create',
    categories
  }
}

export default withRouter(connect(mapStateToProps)(NewPost))