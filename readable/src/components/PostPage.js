import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class PostPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Post Page</h1>
        <Post id={this.props.id} />
      </div>
    )
  }
}

function mapStateToProps({ posts }, props) {
  const { id } = props.match.params

  return {
    id
  }
}

export default connect(mapStateToProps)(PostPage)

