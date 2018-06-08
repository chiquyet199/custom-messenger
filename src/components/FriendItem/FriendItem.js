import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createThread } from 'actions/threads.action'
import { Avatar } from 'components'
import './FriendItem.scss'

const FriendItem = props => {
  const { avatar, name, createThread, id } = props
  return (
    <div
      onClick={() => {
        createThread(id)
      }}
      className="friend-item-wrapper"
    >
      <div className="friend-item">
        <Avatar url={avatar} />
        <div className="fri-content-overview">
          <p className="fri-name">{name}</p>
        </div>
      </div>
    </div>
  )
}

FriendItem.propTypes = {
  createThread: PropTypes.func,
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
}

FriendItem.defaultProps = {
  name: 'Peter',
}

const mapDispatchToProps = dispatch => {
  return {
    createThread: params => dispatch(createThread(params)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(FriendItem)
