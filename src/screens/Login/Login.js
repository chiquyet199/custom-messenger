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
    setTimeout(() => {
      this.setState({ hideContent: true })
      setTimeout(() => {
        this.props.login(userId)
      }, 400)
    }, 400)
  }

  render() {
    const { hideContent } = this.state
    // const { currentUSer } = this.props

    return (
      <div className="db-main">
        {/* {currentUSer ? (
          <h2>{`Welcome back ${currentUSer.name}. We will redirect you to home page.`}}</h2>
        ) : ( */}
        <div className={`login-container ${hideContent ? 'hide' : ''}`}>
          <h2>Please choose an account before using Donald Buddies</h2>
          <UserPicker onSelect={this.userPickerSelection} />
        </div>
        {/* )} */}
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
