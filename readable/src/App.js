import React, { Component } from 'react';
import { getAllPosts, getAllCategories } from './API';
import Categories from './components/Categories'

class App extends Component {
  state = {
    posts: [],
    categories: [],
    categorySelected: ''
  }

  componentDidMount() {
    getAllPosts().then(data => this.setState({ posts: data }))
    getAllCategories().then(data => { this.setState({ categories: data }) })
  }
  render() {
    return (
      <div className='wrapper'>
        <Categories categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
