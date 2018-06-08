import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Avatar } from 'components'

import './SearchBox.scss'

class SearchBox extends Component {
  static propTypes = {
    avatar: PropTypes.string,
  }

  render() {
    const { avatar } = this.props
    console.log(avatar)
    return (
      <div className="db-search-box">
        <img className={'search-icon'} src={require('assets/images/search.svg')} />
        <input placeholder="Search" />
        <Avatar url={avatar} className="avatar small" />
      </div>
    )
  }
}

export default SearchBox
