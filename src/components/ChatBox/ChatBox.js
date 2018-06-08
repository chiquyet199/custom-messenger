import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './ChatBox.scss'

class ChatBox extends Component {
  static propTypes = {
    activeThread: PropTypes.object,
  }

  render() {
    // const {} = this.props.activeThread
    return <div />
  }
}

const mapStateToProps = state => {
  return { activeThread: state.threads.activeThread }
}

export default connect(mapStateToProps)(ChatBox)
