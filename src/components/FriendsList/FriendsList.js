import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { FriendItem, AnimatedItem } from 'components'

class FriendsList extends Component {
  static propTypes = {
    friends: PropTypes.array,
  }

  render() {
    const { friends } = this.props
    return (
      <div style={{ height: '95vh', overflowY: 'scroll' }}>
        {_.map(friends, (friend, idx) => {
          return (
            <AnimatedItem key={idx} idx={idx}>
              <FriendItem {...friend} />
            </AnimatedItem>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.user ? state.user.friends : [],
  }
}

export default connect(mapStateToProps)(FriendsList)
