import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'services/navigate'
import routes from 'configs/routes'

import './TabBar.scss'

class TabBar extends Component {
  static propTypes = {
    showFriends: PropTypes.bool,
    showThreads: PropTypes.bool,
  }
  state = {
    showFriends: this.props.showFriends,
    showThreads: this.props.showThreads,
  }

  componentDidMount() {
    if (this.props.showFriends) {
      setTimeout(() => {
        this.setState({ animateIndicator: true })
      }, 0)
    }
  }

  showFriends = () => {
    navigate(routes.Friends)
  }

  showThreads = () => {
    navigate(routes.Threads)
  }
  render() {
    const { showThreads, showFriends, animateIndicator } = this.state
    return (
      <div className="tabs">
        <div className="tab-header">
          <div onClick={this.showThreads} className={`tab-item ${showThreads ? 'active' : ''}`}>
            THREADS
          </div>
          <div onClick={this.showFriends} className={`tab-item ${showFriends ? 'active' : ''}`}>
            FRIENDS
          </div>
          <span className={`active-indicator ${animateIndicator ? 'animated' : ''}`} />
        </div>
      </div>
    )
  }
}

export default TabBar
