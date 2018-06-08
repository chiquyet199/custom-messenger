import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Avatar, ChatBox } from 'components'
import { setActiveThread } from 'actions/threads.action'
import './ThreadItem.scss'

class ThreadItem extends Component {
  static propTypes = {
    time: PropTypes.string,
    lastMessage: PropTypes.string,
    friend: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      avatar: PropTypes.string,
    }),
    setActiveThread: PropTypes.func,
  }

  static defaultProps = {
    friend: {
      time: '15:55',
      lastMessage: 'Hey man',
      name: 'Peter',
    },
  }

  state = {
    showContent: false,
  }

  toggleShowContent = () => {
    this.setState(prevState => ({ showContent: !prevState.showContent }))
  }

  onClick = () => {
    this.props.setActiveThread(this.props.id)
  }

  render() {
    const { showContent } = this.state
    const { lastMessage } = this.props
    const { time, avatar, name } = this.props.friend
    console.log(this.props)
    return (
      <div className="thread-item-wrapper">
        <div onClick={this.onClick} className="thread-item">
          <Avatar url={avatar} />
          <div className="tri-content-overview">
            <p className="tri-name">{name}</p>
            <p className="tri-last-mes">{lastMessage}</p>
          </div>
          <span className="tri-time">{time}</span>
        </div>
        {showContent && <ChatBox />}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveThread: threadId => dispatch(setActiveThread(threadId)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ThreadItem)
