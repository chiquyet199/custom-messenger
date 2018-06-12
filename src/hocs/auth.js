import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'services/navigate'
import routes from 'configs/routes'

const RequiredAuth = WrapperComponent => {
  return class RequiredAuth extends React.Component {
    static propTypes = {
      currentUser: PropTypes.object,
    }

    componentDidMount() {
      if (!this.props.currentUser) {
        navigate(routes.Login)
      }
    }

    render() {
      return <WrapperComponent {...this.props} />
    }
  }
}

export default RequiredAuth
