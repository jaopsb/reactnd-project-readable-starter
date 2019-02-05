import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <Link to='/'>
          <h1>READABLE</h1>
        </Link>
      </div>
    )
  }
}

export default Nav