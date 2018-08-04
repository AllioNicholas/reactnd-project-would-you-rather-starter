import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import '../utils/App.css';

import NavBar from './NavBar'
import IdentificationPage from './IdentificationPage'
import Dashboard from './Dashboard'
import PoolPage from './PoolPage'
import NewPool from './NewPool'


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.authed === true
          ? <div>
            <NavBar />
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/question/:id' component={PoolPage} />
              <Route path='/add' component={NewPool} />
            </div>
            </div>
          : <IdentificationPage />}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authed : authedUser !== null
  }
}

export default connect(mapStateToProps)(App)
