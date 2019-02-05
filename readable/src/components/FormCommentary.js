import React from 'react'

/*
precisa receber o id do post e o usuario 
*/
class FormCommentary extends React.Component {
  state = {
    title: '',
    text: ''
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  onChangeText = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <form>
        <div className='form-group'>
          <input
            type='text'
            value={this.state.title}
            id='title'
            onChange={this.onChangeTitle}
            placeholder='Titulo' />
          <textarea
            onChange={this.onChangeText}
            value={this.state.text}
            placeholder='body' />
        </div>
        <p>Novo Comentario:</p>
        <p>{this.state.title}</p>
        <p>{this.state.text}</p>
      </form>
    )
  }
}

export default FormCommentary