import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from './actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import PostPage from './views/PostPage';
import PostsView from './views/PostsView';
import Nav from './components/Nav';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <LoadingBar />
          <Nav/>
          {
            this.props.loading === true
              ? null
              : <div>
                <Route exact path='/' component={PostsView} />
                <Route exact path='/post/:id' component={PostPage} />
                <Route exact path='/:category' component={PostsView} />
              </div>
          }
        </React.Fragment>
      </Router>
    );
  }
}


function mapStateToProps({ posts }) {
  return {
    loading: posts === null
  }
}

export default connect(mapStateToProps)(App);
