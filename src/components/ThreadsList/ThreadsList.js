import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ThreadItem, AnimatedItem } from 'components'

class ThreadsList extends Component {
  static propTypes = {
    threads: PropTypes.array,
  }

  render() {
    const { threads } = this.props
    return (
      <div className="list-container">
        {_.map(threads, (thread, idx) => {
          return (
            <AnimatedItem key={idx} idx={idx}>
              <ThreadItem {...thread} />
            </AnimatedItem>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    threads: state.threads.threadsByList,
  }
}

export default connect(mapStateToProps)(ThreadsList)
