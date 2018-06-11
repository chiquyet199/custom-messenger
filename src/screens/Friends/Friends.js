import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigate } from 'services/navigate'
import { SearchBox, TabBar } from 'components'
import routes from 'configs/routes'

class Friends extends Component {
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
        <TabBar showFriends />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user,
  }
}

export default connect(mapStateToProps)(Friends)