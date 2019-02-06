import React from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post'
import Categories from '../components/Categories';
import FormCommentary from '../components/FormCommentary';
import { getComments } from '../API';
import Commentaries from '../components/Commentaries';

class PostPage extends React.Component {
  state = {
    commentaries: []
  }

  render() {
    const { post } = this.props
    const { commentaries } = this.state


    if (!post || post === null)
      return <p>There's no post left to see :/</p>

    getComments(post.id)
      .then(commentaries => this.setState({ commentaries }))

    return (
      <div className='wrapper'>
        <Categories />
        <div className='posts'>
          <Post post={post} />
          <FormCommentary
            post={post}
            user={this.props.user} />
          {
            commentaries.length !== 0 &&
            <Commentaries commentaries={commentaries} />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts, user }, props) {
  const { id } = props.match.params

  return {
    user,
    post: id ? posts.find(post => post.id === id) : null
  }
}

export default connect(mapStateToProps)(PostPage)

