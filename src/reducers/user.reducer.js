import { LOGGED_IN } from 'actions/users.action'

const initialState = null

const actionHandlers = {}

actionHandlers[LOGGED_IN] = (state, user) => {
  return user
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
