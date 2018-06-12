import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AnimatedItem.scss'

class AnimatedItem extends Component {
  static propTypes = {
    idx: PropTypes.number,
    children: PropTypes.node,
    hideContent: PropTypes.bool,
    delay: PropTypes.number,
  }

  static defaultProps = {
    delay: 150,
  }

  state = {
    hideContent: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hideContent: false })
    }, this.props.delay * this.props.idx + 300)
  }

  render() {
    const { children } = this.props
    const { hideContent } = this.state
    return <div className={`animated-item ${hideContent ? 'hide' : ''} `}>{children}</div>
  }
}

export default AnimatedItem
