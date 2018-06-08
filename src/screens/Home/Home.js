import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SearchBox, ThreadsList, FriendsList } from 'components'
import './Home.scss'

class Home extends Component {
  static propTypes = {
    currentUser: PropTypes.any,
  }

  state = {
    hideSearchBox: true,
    showFriends: false,
    showThreads: true,
  }

  showFriends = () => {
    this.setState({ showFriends: true, showThreads: false })
  }

  showThreads = () => {
    this.setState({ showFriends: false, showThreads: true })
  }

  componentDidMount() {
    setTimeout(() => {
      this.animateToShowSearchBox()
    }, 200)
  }

  animateToShowSearchBox = () => {
    this.setState({ hideSearchBox: false })
  }

  render() {
    const { hideSearchBox, showFriends, showThreads } = this.state
    const { currentUser } = this.props
    return (
      <div className="db-main">
        <div className={`searchbox-container ${hideSearchBox ? 'hide' : ''}`}>
          <SearchBox avatar={currentUser.avatar} />
        </div>
        <div className="tabs">
          <div className="tab-header">
            <div onClick={this.showThreads} className={`tab-item ${showThreads ? 'active' : ''}`}>
              THREADS
            </div>
            <div onClick={this.showFriends} className={`tab-item ${showFriends ? 'active' : ''}`}>
              FRIENDS
            </div>
            <span className={`active-indicator ${showFriends ? 'friends' : 'threads'}`} />
          </div>
          <div className="list-container">{showFriends ? <FriendsList /> : <ThreadsList />}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user,
  }
}

export default connect(mapStateToProps)(Home)
