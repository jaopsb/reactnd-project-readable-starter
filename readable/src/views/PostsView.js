import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Posts from '../components/Posts';
import Categories from '../components/Categories';
import { logoutUser } from '../actions/user';
import { setUser } from '../API';
import User from '../components/User';

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
        <User
          handleLogout={this.handleLogout}
          user={this.props.user} />
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