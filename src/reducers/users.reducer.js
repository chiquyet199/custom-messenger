import _ from 'lodash'
import { GET_USERS } from 'actions/users.action'

const initialState = { usersByList: [], usersById: {} }

const actionHandlers = {}

actionHandlers[GET_USERS] = (state, users) => {
  const usersById = _.reduce(
    users,
    function(obj, user) {
      obj[user.id] = user
      return obj
    },
    {},
  )
  return { ...state, usersById, usersByList: users }
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
