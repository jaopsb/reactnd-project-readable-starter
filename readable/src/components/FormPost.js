import React from 'react'

class FormPost extends React.Component {
  state = {
    title: '',
    text: ''
  }
  render() {
    return (
      <div className='form-post'>
        <form onSubmit={this.props.onSubmit}>
          <div className='form-group'>
            <label htmlFor='titleInput'>Titulo</label>
            <input
              className='form-control'
              id='titleInput'
              type='text'
              placeholder='Um titulo interessante'
              value={this.state.title}
              onChange={this.props.onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='textInput'>O Post</label>
            <textarea
              className='form-control'
              id='textInput'
              rows='3'
              placeholder='Conte sua história!' 
              onChange={this.props.onChange}
              />
          </div>
          <button type="submit" classname="btn btn-light">Criar</button>
        </form>
      </div>
    )
  }
}

export default FormPost