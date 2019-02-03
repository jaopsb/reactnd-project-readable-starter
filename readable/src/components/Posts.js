import React from 'react'
import { connect } from 'react-redux'

class Posts extends React.Component {
  render() {
    return (
      <div className='comments'>
        <h3>Posts</h3>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Posts)