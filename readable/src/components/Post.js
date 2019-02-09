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

  render() {
    const { post } = this.state

    if (!post)
      return <p>Post nao encontrado</p>

    return (
      <React.Fragment>
        {
          !this.props.listView &&
          this.props.user === post.author &&
          <button
            className='btn post-edit'
            data-toggle='tooltip'
            onClick={this.toEdit}
            title='Edit Post' />
        }
        <Link to={`/${post.category}/${post.id}`}>
          < div className='card post' >
            <div className='card-body'>
              <div className='post-title-container'>
                <h3 className='card-title title'>{post.title}</h3>

              </div>
              <div className='authvote'>
                <p className='author'>Created By: {post.author} in {post.category}</p>
                <p className='vote'>Points: {post.voteScore}</p>
                {
                  !this.props.listView &&
                  (
                    <React.Fragment>
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
                    </React.Fragment>
                  )
                }
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
        </Link>
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