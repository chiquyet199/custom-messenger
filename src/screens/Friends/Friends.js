import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { auth } from 'hocs'
import routes from 'configs/routes'
import { SearchBox, TabBar, FriendsList } from 'components'

class Friends extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="db-main">
        <SearchBox avatar={currentUser ? currentUser.avatar : ''} />
        <TabBar showFriends />
        <Switch>
          <Route exact path={`${routes.Friends}`} component={FriendsList} />
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

export default connect(mapStateToProps)(auth(Friends))
