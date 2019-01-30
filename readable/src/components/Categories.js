import React from 'react'
import { connect } from 'react-redux'

class Categories extends React.Component {
  render() {
    console.log('Categories Component', this.props.categories)
    return (
      <div className='categories'>
        <h3>Categories</h3>
        <ul>
          <li>Home</li>
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