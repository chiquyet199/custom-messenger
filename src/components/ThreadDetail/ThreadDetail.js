import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ChatBox } from 'components'
import { setActiveThread, clearActiveThread } from 'actions/threads.action'
import './ThreadDetail.scss'

class ThreadDetail extends Component {
  static propTypes = {
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
      this.animateContent()
      this.props.setActiveThread(this.props.match.params.id)
    }, 300)
  }

  componentWillUnmount() {
    this.setState({ showContent: false })
    this.props.clearActiveThread()
  }

  animateContent = () => {
    this.setState({ showContent: true })
  }

  render() {
    const { showContent } = this.state
    return (
      <div className={`chat-box-wrapper ${showContent ? 'active' : ''}`}>
        <ChatBox />
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
