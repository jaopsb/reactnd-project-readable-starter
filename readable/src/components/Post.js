import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleDelPost, handleVotePost } from '../actions/posts'
import moment from 'moment'

class Post extends React.Component {
  state = {
    post: {}
  }

  componentDidMount() {

    this.setState({
      post: this.props.post
    })
  }

  deletePost = () => {
    handleDelPost(this.state.post.id)

    this.props.history.push('/')
  }

  handleUpVote = () => {
    const { post } = this.state

    this.props.dispatch(handleVotePost(post, 'upVote', 'posts'))
      .then(({ post }) => this.setState({ post }))
  }

  handleDwVote = () => {
    const { post } = this.state

    this.props.dispatch(handleVotePost(post, 'downVote', 'posts'))
      .then(({ post }) => this.setState({ post }))
  }

  toEdit = () => {
    this.props.history.push(`/edit/${this.state.post.id}`)
  }


  handleDelPost = () => {

    const { post } = this.state

    const resp = window.confirm("Are you really going to delete this post??")

    if (resp) {
      this.props.dispatch(handleDelPost(post.id))
        .then(() => this.props.history.push('/'))
    }
  }

  render() {
    const { post } = this.state

    if (!post)
      return <p>Post nao encontrado</p>

    return (
      <React.Fragment>
        < div className='card post' >
          <div className='card-body'>
            <div className='post-title-container'>
              <Link to={`/${post.category}/${post.id}`}>
                <h3 className='card-title title'>{post.title}</h3>
              </Link>
              {
                post.deleted &&
                <div className='badge-deleted'>
                  <span className='badge badge-danger'>deleted</span>
                </div>
              }
            </div>
            <div className='authvote'>
              <p className='author'>Created By: {post.author} in
              <Link to={`/${post.category}`}>
                  <strong>
                    {'\t' + post.category}
                  </strong>
                </Link>
              </p>
              <p className='vote'>Score: {'\t'}
                {
                  post.voteScore >= 0 ?
                    <span className='badge badge-success'>{post.voteScore}</span> :
                    <span className='badge badge-danger'>{post.voteScore}</span>
                }
              </p>
              <button
                className='btn post-edit'
                data-toggle='tooltip'
                onClick={this.toEdit}
                title='Edit Post' />
              <button
                className='btn btn-light up-vote'
                data-toggle='tooltip'
                data-placement='top'
                onClick={this.handleUpVote}
                title="Up Vote" />
              <button
                className='btn btn-light down-vote'
                data-toggle='tooltip'
                data-placement='top'
                onClick={this.handleDwVote}
                title='Down Vote' />
              <button
                type="button"
                data-toggle='tooltip'
                title='Delete Post'
                onClick={this.handleDelPost}
                className="btn btn-danger btn-form-delete" />
            </div>
            <p className='sm-date'>Created in: {moment(post.timestamp).format('D/M/YYYY')}</p>
            {
              this.props.listView &&
              <p className='card-text sm-comments'>{post.commentCount} comments</p>
            }
            {
              !this.props.listView &&
              <div className='card-body'>
                {post.body}
              </div>
            }
          </div>
        </div >
      </React.Fragment>
    )
  }
}

function mapStateToProps({ user }) {
  return {
    user
  }
}

export default withRouter(connect(mapStateToProps)(Post))