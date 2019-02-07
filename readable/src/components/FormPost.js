import React from 'react'

class FormPost extends React.Component {
  state = {
    title: '',
    text: ''
  }
  render() {
    return (
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
    )
  }
}

export default FormPost