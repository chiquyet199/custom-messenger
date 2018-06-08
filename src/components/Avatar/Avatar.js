import React from 'react'
import PropTypes from 'prop-types'

import './Avatar.scss'

const Avatar = props => {
  const { className, url } = props
  const imgSource = url ? url : require('assets/images/user-placeholder.svg')
  return <img src={imgSource} className={`db-avatar ${className || ''} `} />
}

Avatar.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
}

export default Avatar
