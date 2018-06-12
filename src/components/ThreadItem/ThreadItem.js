import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Avatar } from 'components'
import { setActiveThread, clearActiveThread } from 'actions/threads.action'
import './ThreadItem.scss'
import { navigate } from 'services/navigate'
import routes from 'configs/routes'

class ThreadItem extends Component {
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

  goToDetail = () => {
    navigate(`${routes.Threads}/${this.props.id}`)
  }

  render() {
    const { lastMessage } = this.props
    const { avatar, name } = this.props.friend
    const time = `${_.random(10, 23)} : ${_.random(11, 59)}`
    return (
      <div>
        {/* <Link to={{ pathname: `/threads/${id}` }}> */}
        <div onClick={this.goToDetail} className={`thread-item-wrapper`}>
          <div className="thread-item">
            <Avatar url={avatar} />
            <div className="tri-content-overview">
              <p className="tri-name">{name}</p>
              <p className="tri-last-mes">{lastMessage}</p>
            </div>
            <span className="tri-time">{time}</span>
          </div>
        </div>
        {/* </Link> */}
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
)(ThreadItem)
