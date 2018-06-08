import _ from 'lodash'
import { getListUsers } from 'services/rest'
import { getThreads } from 'actions/threads.action'

export const GET_USERS = 'GET_USERS'
export const LOGGED_IN = 'LOGGED_IN'

export { login, getUsers }

function login(userId) {
  return (dispatch, getState) => {
    const usersById = getState().users.usersById
    const currentUser = usersById[userId]
    if (currentUser) {
      currentUser.friends = []
      _.map(currentUser.friendIds, friendId => {
        currentUser.friends.push(usersById[friendId])
      })
    }
    dispatch({
      type: LOGGED_IN,
      payload: usersById[userId] || null,
    })
    dispatch(getThreads(userId))
  }
}

function getUsers() {
  return dispatch => {
    getListUsers().then(users => {
      dispatch({
        type: GET_USERS,
        payload: users,
      })
    })
  }
}
