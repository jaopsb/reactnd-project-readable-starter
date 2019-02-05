import React from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post'
import Categories from '../components/Categories';

class PostPage extends React.Component {
  render() {
    const { post } = this.props

    if (!post || post === null)
      return <p> Nao ha Post para ver :/</p>

    return (
      <div className='wrapper'>
        <Categories />
        <div className='posts'>
          <Post post={post} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }, props) {
  const { id } = props.match.params

  return {
    post: id ? posts.find(post => post.id === id) : null
  }
}

export default connect(mapStateToProps)(PostPage)

