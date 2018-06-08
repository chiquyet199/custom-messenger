import { TOGGLE_LOADING } from 'actions/common.action'

const initialState = {}

const actionHandlers = {}

actionHandlers[TOGGLE_LOADING] = state => {
  return state
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
