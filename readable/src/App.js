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
import Error404 from './views/Error404';


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
                <Switch>

                  <Route path='/' exact={true} component={PostsView} />
                  <Route path='/post/:id' exact={true} component={PostPage} />
                  <Route path='/:category/posts' exact={true} component={PostsView} />
                  <Route path='/new/' exact={true} component={NewPost} />
                  <Route path='/:category/posts/new/' exact={true} component={NewPost} />
                  <Route path='/edit/:id' exact={true} component={NewPost} />
                  <Route path='/' component={Error404} />
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
    loading: posts && !user
  }
}

export default connect(mapStateToProps)(App)
