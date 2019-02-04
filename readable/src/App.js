import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from './actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import './App.css'
import PostPage from './components/PostPage';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <LoadingBar />
          {
            this.props.loading === true
              ? null
              : <div>
                <Route exact path='/' component={Home} />
                <Route path='/post/:id' component={PostPage} />
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
