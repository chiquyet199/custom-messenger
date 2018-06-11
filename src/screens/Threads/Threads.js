import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigate } from 'services/navigate'
import { Switch, Route } from 'react-router-dom'
import { SearchBox, TabBar, ThreadsList, ThreadDetail } from 'components'
import routes from 'configs/routes'

class Threads extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
  }

  componentDidMount() {
    if (!this.props.currentUser) navigate(routes.Login)
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="db-main">
        <SearchBox avatar={currentUser ? currentUser.avatar : ''} />
        <TabBar showThreads />
        <Switch>
          <Route exact path={`${routes.Threads}`} component={ThreadsList} />
          <Route path={`${routes.Threads}/:id`} component={ThreadDetail} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user,
  }
}

export default connect(mapStateToProps)(Threads)
