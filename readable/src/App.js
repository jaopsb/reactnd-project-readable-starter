import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Categories from './components/Categories'
class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())

  }
  render() {
    return (
      <div className='wrapper'>
        <Categories />
        {/*<Posts posts={this.props.posts} />*/}
      </div>
    );
  }
}

export default connect()(App);
