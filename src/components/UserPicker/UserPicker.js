import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './UserPicker.scss'

class UserPicker extends Component {
  static propTypes = {
    users: PropTypes.array,
    login: PropTypes.func,
    className: PropTypes.string,
    onSelect: PropTypes.func,
  }

  static defaultProps = {
    onSelect: () => {},
  }

  state = {
    isOpen: false,
  }

  toggleContent = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  onChange = e => {
    this.props.login(e.target.value)
  }

  render() {
    const { isOpen } = this.state
    const { users, className, onSelect } = this.props
    return (
      <div className={`user-picker ${className || ''} ${isOpen ? 'is-open' : ''}`}>
        <div className="user-picker-header" onClick={this.toggleContent}>
          <h4>Please select account </h4>
          <img className="arrow" src={require('assets/images/arrow.svg')} />
        </div>
        <div className="user-picker-content">
          {users.length === 0 && (
            <div className="user-picker-item" onClick={this.toggleContent}>
              Not found
            </div>
          )}
          {_.map(users, user => (
            <div
              className="user-picker-item"
              key={user.id}
              onClick={() => {
                this.toggleContent()
                onSelect(user.id)
              }}
            >
              {user.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.usersByList,
  }
}
export default connect(mapStateToProps)(UserPicker)
