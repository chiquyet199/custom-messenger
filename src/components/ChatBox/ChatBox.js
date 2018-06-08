import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Avatar } from 'components'
import './ChatBox.scss'

class ChatBox extends Component {
  static propTypes = {
    activeThread: PropTypes.object,
    currentUser: PropTypes.object,
  }

  focusInput = e => {
    e.stopPropagation()
  }

  render() {
    const { activeThread, currentUser } = this.props
    if (!activeThread) return <div />
    const { messages, friend } = activeThread
    return (
      <div className="chat-box">
        {_.map(messages, mes => {
          const ownMes = currentUser.id === mes.senderId
          return (
            <div key={mes.id} className={`mes ${ownMes ? 'own' : ''}`}>
              {!ownMes && <Avatar className="small" url={friend.avatar} />}
              <span>{mes.text}</span>
            </div>
          )
        })}
        <div className="mes-input">
          <input onClick={this.focusInput} placeholder="Say something....." />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { activeThread: state.threads.activeThread, currentUser: state.user }
}

export default connect(mapStateToProps)(ChatBox)
