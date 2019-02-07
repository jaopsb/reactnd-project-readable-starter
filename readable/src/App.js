import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from './actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import PostPage from './views/PostPage';
import PostsView from './views/PostsView';
import Nav from './components/Nav';
import NewPost from './views/NewPost';
import Login from './views/Login';
import { getUser } from './API';


class App extends Component {

  componentDidMount() {

    const user = getUser()

    if (user !== null)
      this.props.dispatch(handleInitialData(user))
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <LoadingBar />
          <Nav />
          {
            !this.props.user &&
            <Login />
          }
          {
            this.props.loading === true
              ? null
              : <div>
                <Route exact path='/' component={PostsView} />
                <Route exact path='/post/:id' component={PostPage} />
                <Route exact path='/:category/posts' component={PostsView} />
                <Route exact path='/:category/new/' component={NewPost} />
                <Route exact path='/edit/:id' component={NewPost} />
              </div>
          }
        </React.Fragment>
      </Router>
    );
  }
}


function mapStateToProps({ posts, user }) {
  return {
    user,
    loading: posts && !user
  }
}

export default connect(mapStateToProps)(App)
