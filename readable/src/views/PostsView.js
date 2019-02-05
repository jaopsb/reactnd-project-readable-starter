import React from 'react'
import { connect } from 'react-redux'
import Posts from '../components/Posts';
import Categories from '../components/Categories';

class PostsView extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Categories />
        <Posts posts={this.props.posts} />
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
    posts: category? posts.filter(post => post.category === category) : posts
  }
}

export default connect(mapStateToProps)(PostsView)