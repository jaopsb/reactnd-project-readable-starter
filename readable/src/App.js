import React, { Component } from 'react'
import './App.css'
import { getAllPosts, getAllCategories } from './API'
import Categories from './components/Categories'
import Posts from './components/Posts';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import teste from './test-redux'


class App extends Component {
  state = {
    posts: [],
    categories: [],
    categorySelected: 'home'
  }

  componentDidMount() {
    getAllPosts().then(data => this.setState({ posts: data }))
    getAllCategories().then(data => { this.setState({ categories: data }) })

  }
  render() {
    teste()
    //console.log('State', this.state)
    return (
      <div className='wrapper'>
        <Categories categories={this.state.categories} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
