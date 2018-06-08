import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Switch, Route, Router } from 'react-router-dom'

import history from 'configs/history'
import routes from 'configs/routes'
import { getUsers } from 'actions/users.action'
import { Home, Login } from 'screens'

class App extends React.Component {
  static propTypes = {
    getUsers: PropTypes.func,
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={routes.Home} component={Home} />
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
