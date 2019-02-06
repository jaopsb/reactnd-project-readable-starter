import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Posts from '../components/Posts';
import Categories from '../components/Categories';
import { logoutUser } from '../actions/user';
import { setUser } from '../API';

class PostsView extends React.Component {

  handleLogout = () => {
    this.props.dispatch(logoutUser())
    setUser('')
  }

  render() {
    return (
      <div className='wrapper'>
        <Categories />
        <div className='posts'>
          {
            this.props.category &&
            <Link to={`/${this.props.category}/new/`}>
              <button className='btn btn-light btn-new-post'>
                New Post
              </button>
            </Link>
          }
          <Posts
            listView={true}
            posts={this.props.posts} />
        </div>
        <div className='user'>
          <p>Central do Usuario</p>
          <p>Logged as <strong>{this.props.user}</strong></p>
          <button
            onClick={this.handleLogout}
            className='btn btn-light'>
            Change User
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts, user }, props) {
  const { category } = props.match.params

  return {
    category,
    posts: category ? posts.filter(post => post.category === category) : posts,
    user
  }
}

export default connect(mapStateToProps)(PostsView)