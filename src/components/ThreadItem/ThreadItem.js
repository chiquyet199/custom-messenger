import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Avatar } from 'components'
import './ThreadItem.scss'

class ThreadItem extends Component {
  static propTypes = {
    time: PropTypes.string,
    avatar: PropTypes.string,
    lastMessage: PropTypes.string,
    name: PropTypes.string,
  }

  static defaultProps = {
    time: '15:55',
    lastMessage: 'Hey man',
    name: 'Peter',
  }

  state = {
    showContent: false,
  }

  toggleShowContent = () => {
    this.setState(prevState => ({ showContent: !prevState.showContent }))
  }
  render() {
    const { showContent } = this.state
    const { time, avatar, name, lastMessage } = this.props
    return (
      <div className="thread-item-wrapper">
        <div className="thread-item">
          <Avatar src={avatar} />
          <div className="tri-content-overview">
            <p className="tri-name">{name}</p>
            <p className="tri-last-mes">{lastMessage}</p>
          </div>
          <span className="tri-time">{time}</span>
        </div>
        {showContent && <ChatBox id />}
      </div>
    )
  }
}

export default ThreadItem
