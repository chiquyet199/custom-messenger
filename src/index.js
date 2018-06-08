import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from 'configs/store'
import App from './App'

import 'assets/css/base.scss'
import 'assets/css/common.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
