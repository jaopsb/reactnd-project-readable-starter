import React from 'react'
import { connect } from 'react-redux'

class Categories extends React.Component {
  render() {
    return (
      <div className='categories'>
        <h3>Categories</h3>
        <ol>
          <li>Home</li>
          {
            this.props.categories.map(cat => (
              <li key={cat.name + cat.path}>{cat.name}</li>
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