import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Avatar, ChatBox } from 'components'
import { setActiveThread, clearActiveThread } from 'actions/threads.action'
import './ThreadDetail.scss'
import { navigate } from 'services/navigate'
import routes from 'configs/routes'

class ThreadDetail extends Component {
  static propTypes = {
    time: PropTypes.string,
    lastMessage: PropTypes.string,
    id: PropTypes.string,
    friend: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      avatar: PropTypes.string,
    }),
    setActiveThread: PropTypes.func,
    clearActiveThread: PropTypes.func,
    match: PropTypes.object,
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

  componentDidMount() {
    setTimeout(() => {
      this.toggleShowContent()
    }, 0)
  }

  toggleShowContent = () => {
    this.setState(
      prevState => ({ showContent: !prevState.showContent }),
      () => {
        if (this.state.showContent) this.props.setActiveThread(this.props.match.params.id)
        else {
          setTimeout(() => {
            this.props.clearActiveThread()
            navigate(routes.Threads)
          }, 400)
        }
      },
    )
  }

  render() {
    const { showContent } = this.state
    const { lastMessage } = this.props
    const { avatar, name } = this.props.friend
    const time = `${_.random(10, 23)} : ${_.random(11, 59)}`
    return (
      <div className="list-container">
        <div
          onClick={this.toggleShowContent}
          className={`thread-item-wrapper ${showContent ? 'active' : ''}`}
        >
          <div className="thread-item">
            <Avatar url={avatar} />
            <div className="tri-content-overview">
              <p className="tri-name">{name}</p>
              {!showContent && <p className="tri-last-mes">{lastMessage}</p>}
            </div>
            {!showContent && <span className="tri-time">{time}</span>}
          </div>
          <div className={`chat-box-wrapper`}>
            <ChatBox />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveThread: threadId => dispatch(setActiveThread(threadId)),
    clearActiveThread: () => dispatch(clearActiveThread()),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ThreadDetail)