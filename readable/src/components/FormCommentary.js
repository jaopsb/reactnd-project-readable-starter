import React from 'react'
import uuid from 'uuid'
import { createComm } from '../API';

/*
precisa receber o id do post e o usuario 
*/
class FormCommentary extends React.Component {
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

    comment.body = e.target.value

    this.setState({ comment })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { comment } = this.state

    if (comment.body === '')
      return alert("You can't create a comment with no comment!!!")

    comment.id = uuid()
    comment.parentId = this.props.post.id
    comment.author = this.props.user

    createComm(comment)
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <textarea
              className='form-control'
              onChange={this.onChangeBody}
              value={this.state.text}
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


export default FormCommentary