import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Avatar } from 'components'
import { createNewThreadMessage } from 'actions/threads.action'
import './ChatBox.scss'

class ChatBox extends Component {
  static propTypes = {
    activeThread: PropTypes.object,
    currentUser: PropTypes.object,
    sendMessage: PropTypes.func,
  }

  onKeyUp = e => {
    if (e.keyCode === 13) {
      this.props.sendMessage(e.target.value)
      this.chatInput.value = ''
      this.scrollToNewMessage()
    }
  }

  scrollToNewMessage = () => {
    setTimeout(() => {
      // // const el = document.getElementsByClassName('chat-content')[0]
      this.chatContent.scrollTop = this.chatContent.scrollHeight
    }, 100)
  }

  render() {
    const { activeThread, currentUser } = this.props
    if (!activeThread) return <div />
    const { messages, friend } = activeThread
    return (
      <div className="chat-box">
        <div
          className="chat-content scroll"
          ref={node => {
            this.chatContent = node
          }}
        >
          {_.map(messages, mes => {
            const ownMes = currentUser.id === mes.senderId
            return (
              <div key={mes.id} className={`mes ${ownMes ? 'own' : ''}`}>
                {!ownMes && <Avatar className="small" url={friend ? friend.avatar : ''} />}
                <span>{mes.text}</span>
              </div>
            )
          })}
        </div>
        <div className="mes-input">
          <input
            ref={node => (this.chatInput = node)}
            onKeyUp={this.onKeyUp}
            placeholder="Say something....."
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { activeThread: state.threads.activeThread, currentUser: state.user }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => dispatch(createNewThreadMessage(message)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatBox)
