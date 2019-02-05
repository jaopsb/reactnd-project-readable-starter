import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Categories extends React.Component {
  render() {
    return (
      <div className='categories'>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link to='/'>Home</Link>
          </li>
          {
            this.props.categories.map(cat => (
              <li
                className='list-group-item'
                key={cat.name + cat.path}>
                <Link to={`/${cat.name}`}>
                  {cat.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(Categories)