import React from 'react'
import { handleVote } from '../API';

class Comment extends React.Component {

  state = {
    comment: {}
  }

  componentDidMount() {
    const { comment } = this.props

    this.setState({ comment })
  }

  handleUpVote = () => {
    const { id } = this.state.comment

    handleVote(id, 'upVote', 'comments')
      .then(comment => {
        this.setState({ comment })
      })
  }

  handleDwVote = () => {
    const { id } = this.state.comment

    handleVote(id, 'downVote', 'comments')
      .then(comment => {
        this.setState({ comment })
      })
  }

  render() {
    const { comment } = this.state
    const { body, author, voteScore } = comment

    return (
      <div className='comment'>
        <h5 className='comment-body'>{body}</h5>

        <div className='authpoint'>

          <p className='author-body'>
            <strong>By: </strong>
            {author}
          </p>

          <p className='point-body'>
            <strong>Points: </strong>
            {voteScore}
          </p>

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
        </div>
      </div>
    )
  }
}

export default Comment