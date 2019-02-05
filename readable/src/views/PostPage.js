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
      <React.Fragment>
        <div className='wrapper'>
          <Categories />
          <div className='posts'>
            <Post post={post} />
          </div>
        </div>
        <ul>
          {Object.keys(post).map(key => {
            return <li>{key}</li>
          })}
        </ul>
      </React.Fragment>
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

