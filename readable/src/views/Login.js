import React from 'react'
import { loginUser } from '../actions/user';
import { connect } from 'react-redux'
import { getUser, setUser } from '../API';

class Login extends React.Component {
  state = {
    login: ''
  }

  componentDidMount() {

    const user = getUser()

    if (user)
      this.props.dispatch(loginUser(user))
  }

  handleChange = (e) => {
    this.setState({ login: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { login } = this.state

    if (login === '')
      return alert('Login as Somebody,please')

    this.props.dispatch(loginUser(login))
    setUser(login)
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='login-container'>
          <h1 className='login-title'>Login</h1>
          <form
            className='login-input'
            onSubmit={this.handleSubmit}>
            <input
              className='form-control'
              value={this.state.login}
              placeholder='Login'
              onChange={this.handleChange} />
          </form>
          <button
            type='submit'
            onClick={this.handleSubmit}
            className='btn btn-light btn-login'>
            Login
          </button>
        </div>
      </div>
    )
  }
}


export default connect()(Login)