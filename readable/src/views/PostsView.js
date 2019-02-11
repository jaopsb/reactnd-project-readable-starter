import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import User from '../components/User';
import Posts from '../components/Posts';
import Select from '../components/Select';
import Categories from '../components/Categories';

import { setUser } from '../API';
import { logoutUser } from '../actions/user';
import { sortPosts, VOTE_UP, VOTE_DOWN, TIME_UP, TIME_DOWN } from '../actions/posts';

class PostsView extends React.Component {

  state = {
    sort: ''
  }

  options = [
    {
      path: VOTE_UP,
      name: 'by Points (higher to lower)'
    },
    {
      path: VOTE_DOWN,
      name: 'by Points (lower to higher)'
    },
    {
      path: TIME_UP,
      name: 'by Date (newest to oldest)'
    },
    {
      path: TIME_DOWN,
      name: 'by Date (oldest to newest)'
    }
  ]



  handleLogout = () => {
    this.props.dispatch(logoutUser())
    setUser('')
  }

  handleSort = (e) => {
    const sort = async () => { await this.setState({ sort: e.target.value }) }

    sort().then(() => {
      this.props.dispatch(sortPosts(this.state.sort))
    })

  }

  handleSortSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(sortPosts(this.state.sort))
  }

  render() {
    const { pathname } = this.props.location

    return (
      <div className='wrapper'>
        <Categories />
        <div className='posts'>
          <div className='new-post-btn-container'>
            <Link to={pathname + (pathname === '/' ? 'new' : '/new')}>
              <button className='btn btn-light btn-new-post'>
                New Post
              </button>
            </Link>
            <form
              className='form-btn-new-post'
              onSubmit={this.handleSortSubmit}>
              <Select
                onChange={this.handleSort}
                showSubmitBtn={true}
                selected={this.state.sort}
                options={this.options}
                btnTitle={'Sort'}
              />
            </form>
          </div>
          <Posts
            listView={true}
            posts={this.props.posts} />
        </div>
        <User
          handleLogout={this.handleLogout}
          user={this.props.user} />
      </div >
    )
  }
}

function mapStateToProps({ posts, user }, props) {
  const { category } = props.match.params

  return {
    category,
    posts: category ?
      posts.filter(post => (post.category === category)) : posts,
    user
  }
}

export default connect(mapStateToProps)(PostsView)