import React from 'react'
import { connect } from 'react-redux'

class Post extends React.Component {
  render() {
    const { post } = this.props

    if (!post)
      return <p>Post nao econtrado</p>

    return (
      <div key={post.id}>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, { id }) {
  return {
    post: posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(Post)