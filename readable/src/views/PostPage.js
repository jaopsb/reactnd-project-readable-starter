import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import FormComment from '../components/FormComments';
import Comments from '../components/Comments';
import { handleReceiveComm, handleCreateComm, cleanCom } from '../actions/comments';

class PostPage extends React.Component {
  componentDidMount() {
    const { id, receiveComs } = this.props
    receiveComs(id)
  }

  componentWillUnmount() {
    this.props.cleanComs()
  }

  render() {
    const { post } = this.props

    if (!post || post === null)
      return <p>There's no post here to see :/</p>

    return (
      <div className='wrapper'>
        <Link className="back-button" to="/" />
        <div className='posts'>
          <Post post={post} />
          <FormComment
            post={post}
            user={this.props.user}
            handleSubmit={this.props.handleSubmit}
          />
          <Comments />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts, user }, props) => {
  const { id } = props.match.params

  return {
    user,
    id,
    post: id ? posts.find(post => post.id === id) : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveComs: (id) => { dispatch(handleReceiveComm(id)) },
    handleSubmit: (comment) => dispatch(handleCreateComm(comment)),
    cleanComs: () => dispatch(cleanCom())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)

