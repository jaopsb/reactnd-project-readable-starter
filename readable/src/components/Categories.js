import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Categories extends React.Component {
  render() {
    return (
      <div className='categories'>
        <h3>Categories</h3>
        <ol>
          <li>Home</li>
          {
            this.props.categories.map(cat => (
              <li key={cat.name + cat.path}>
                <Link to={`/${cat.name}`}>
                  {cat.name}
                </Link>
              </li>
            ))
          }
        </ol>
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