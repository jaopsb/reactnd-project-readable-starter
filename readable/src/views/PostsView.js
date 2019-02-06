import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Posts from '../components/Posts';
import Categories from '../components/Categories';

class PostsView extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Categories />
        <div className='posts'>
          {
            this.props.category &&
            <Link to={`/${this.props.category}/new/`}>
              <button className='btn btn-light btn-new-post'>
                Novo Post
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
          <Link to='/login'>
            <button className='btn btn-light'>
              Change User
            </button>
          </Link>
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