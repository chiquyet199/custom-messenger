import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'

import routes from 'configs/routes'
import { getUsers } from 'actions/users.action'
import { Login, Threads, Friends } from 'screens'

class App extends React.Component {
  static propTypes = {
    getUsers: PropTypes.func,
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path={routes.Threads} component={Threads} />
          <Route path={routes.Friends} component={Friends} />
          <Route exact path={routes.Login} component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default connect(
  null,
  { getUsers },
)(App)
