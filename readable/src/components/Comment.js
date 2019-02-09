import React from 'react'
import moment from 'moment'

class Comment extends React.Component {

  state = {
    comment: {},
    edit: false
  }

  componentDidMount() {
    const { comment } = this.props

    this.setState({ comment })
  }

  handleUpVote = () => {
    const { comment } = this.state

    this.props.handleVote('upVote', comment)
      .then(comment => { this.setState({ comment }) })
  }

  handleDwVote = () => {
    const { comment } = this.state

    this.props.handleVote('downVote', comment)
      .then(comment => { this.setState({ comment }) })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { comment } = this.state
    this.props.handleSubmitComm(comment)
      .then(() => this.setState({ edit: !this.state.edit }))

  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  toDel = () => {
    const { comment } = this.state

    let resp = window.confirm("Delete this comment?")

    if (resp)
      this.props.handleDel(comment.id)
  }

  handleChangeBody = (e) => {
    const { comment } = this.state

    this.setState({ comment: { ...comment, body: e.target.value } })
  }

  render() {
    const { comment } = this.state
    const { body, author, voteScore, timestamp } = comment

    return (
      <div className='comm-container'>
        {
          this.props.user === author &&
          <div className="btn-edit-del-comm">
            <button
              className='btn edit'
              data-toggle='tolltip'
              onClick={this.toggleEdit}
              title='Edit Post' />
            <button
              className='btn del'
              data-toggle='tolltip'
              onClick={this.toDel}
              title='Edit Post' />
          </div>
        }
        <div className='comment'>
          {
            this.state.edit ?
              <form
                className="form-edit-comment"
                onSubmit={this.props.handleSubmit}>
                <input
                  onChange={this.handleChangeBody}
                  className='form-control'
                  value={body}
                />
                <div className='btns-container float-right'>
                  <button
                    type='submit'
                    onClick={this.handleSubmit}
                    className='btn btn-light'>edit</button>
                  <button
                    onClick={this.toggleEdit}
                    className='btn btn-light'>cancel</button>
                </div>
              </form> :
              <h5 className='comment-body'>{body}</h5>
          }
          <div className='authpoint'>
            <p className='author-body'>
              <strong>By: </strong>
              {author}
              <span className='sm-date'>
                {`\t in ${moment(timestamp).format('D/M/YYYY')}`}
              </span>
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
      </div>
    )
  }
}

export default Comment