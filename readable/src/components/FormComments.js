import React from 'react'
import uuid from 'uuid'

class FormComment extends React.Component {
  state = {
    comment: {
      author: '',
      body: '',
      deleted: false,
      id: '',
      parentDeleted: false,
      timestamp: 0,
      voteScore: 0
    }
  }

  onChangeBody = (e) => {
    const { comment } = this.state

    this.setState({ comment: { ...comment, body: e.target.value } })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { comment } = this.state

    console.log('comment on submit', this.state)

    if (comment.body === '')
      return alert("You can't create a comment with no comment!!!")

    comment.id = uuid()
    comment.parentId = this.props.post.id
    comment.author = this.props.user

    this.props.handleSubmit(comment)
      .then((comment) => this.setState({ comment: { ...comment, body: '' } }))
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <textarea
              className='form-control'
              onChange={this.onChangeBody}
              value={this.state.comment.body}
              placeholder='Write that Comment!!' />
            <button
              className='btn btn-info'>
              Comment
            </button>
          </div>
        </form>
      </div>
    )
  }
}


export default FormComment