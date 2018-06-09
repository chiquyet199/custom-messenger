import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserPicker } from 'components'

import { login } from 'actions/users.action'

import './Login.scss'

class Login extends Component {
  static propTypes = {
    login: PropTypes.func,
    currentUSer: PropTypes.any,
  }

  state = {
    hideContent: false,
  }

  userPickerSelection = userId => {
    this.animateOutContent().then(() => {
      this.callLogin(userId)
    })
  }

  animateOutContent = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({ hideContent: true })
        resolve()
      }, 400)
    })
  }

  callLogin = userId => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.props.login(userId)
        resolve()
      }, 400)
    })
  }

  render() {
    const { hideContent } = this.state

    return (
      <div className="db-main">
        <div className={`login-container ${hideContent ? 'hide' : ''}`}>
          <h2>Please choose an account before using Donald Buddies</h2>
          <UserPicker onSelect={this.userPickerSelection} />
        </div>
      </div>
    )
  }
}

const mapStateToProp = state => {
  return {
    currentUSer: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: userId => dispatch(login(userId)),
  }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps,
)(Login)
