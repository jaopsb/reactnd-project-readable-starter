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
            <button className='btn btn-light btn-new-post'>
              <Link to={`/${this.props.category}/new/`}>
                Novo Post
              </Link>
            </button>
          }
          <Posts
            listView={true}
            posts={this.props.posts} />
        </div>
        <div className='user'>
          <p>Central do Usuario</p>
          <p>Dados aqui vao ficar</p>
          <p>Yoda style vou falar</p>
          <p>Pq assim, pica eu vou ficar</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }, props) {
  const { category } = props.match.params

  return {
    category,
    posts: category ? posts.filter(post => post.category === category) : posts
  }
}

export default connect(mapStateToProps)(PostsView)