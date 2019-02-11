import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from './actions/shared'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
            this.props.loading === false &&
            < div >
            <Switch>
              <Route exact={true} path='/' component={PostsView} />
              <Route exact={true} path='/new/' component={NewPost} />
              <Route exact={true} path='/edit/:id' component={NewPost} />
              <Route exact={true} path='/:category' component={PostsView} />
              <Route exact={true} path='/:category/new/' component={NewPost} />
              <Route exact={true} path='/:category/:id' component={PostPage} />
            </Switch>
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
    loading: !posts || !user
  }
}

export default connect(mapStateToProps)(App)
