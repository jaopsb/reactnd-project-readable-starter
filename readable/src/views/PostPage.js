import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import FormCommentary from '../components/FormCommentary';
import { getComments } from '../API';
import Commentaries from '../components/Commentaries';

class PostPage extends React.Component {
  state = {
    commentaries: []
  }

  componentDidMount() {
    const { post } = this.props

    if (post)
      getComments(post.id)
        .then(commentaries => this.setState({ commentaries }))
  }

  render() {
    const { post } = this.props
    const { commentaries } = this.state

    if (!post || post === null)
      return <p>There's no post left to see :/</p>

    return (
      <div className='wrapper'>
        <Link className="back-button" to="/" />
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

