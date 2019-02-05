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
        {posts && posts.map(post => {
          return <Post
            listView={this.props.listView}
            key={post.id}
            post={post} />
        })}
      </div>
    )
  }
}

export default Posts