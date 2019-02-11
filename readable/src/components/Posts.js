import React from 'react'
import Post from './Post';

class Posts extends React.Component {
  render() {
    const { posts } = this.props

    if (posts.length === 0)
      return (
        <div>
          <p>Nao há Posts sobre essa categoria :/</p>
        </div>)

    return (
      <div>
        {posts && posts.map(post => !post.deleted ? <Post
          listView={this.props.listView}
          key={post.id}
          post={post} /> : null
        )}
      </div>
    )
  }
}

export default Posts