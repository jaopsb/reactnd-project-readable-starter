import React from 'react'

class User extends React.Component{
  render(){
    return(
      <div className='user'>
          <h4>User Space</h4>
          <p>Logged as <strong>{this.props.user}</strong></p>
          <button
            onClick={this.props.handleLogout}
            className='btn btn-light'>
            Change User
          </button>
        </div>
    )
  }
}

export default User