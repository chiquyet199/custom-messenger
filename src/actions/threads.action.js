import _ from 'lodash'
import { getListThreads, createNewThread } from 'services/rest'

export const CREATE_THREAD = 'CREATE_THREAD'
export const GET_THREADS = 'GET_THREADS'
export const CLEAR_ACTIVE_THREAD = 'CLEAR_ACTIVE_THREAD'
export const SET_ACTIVE_THREAD = 'SET_ACTIVE_THREAD'

import { navigate } from 'services/navigate'
import routes from 'configs/routes'

export { createThread, getThreads, setActiveThread, clearActiveThread }

function clearActiveThread() {
  return {
    type: CLEAR_ACTIVE_THREAD,
  }
}

function createThread(userIds) {
  return dispatch => {
    createNewThread(userIds).then(newThread => {
      dispatch({ type: CREATE_THREAD, payload: newThread })
    })
  }
}

function getThreads(userId) {
  return (dispatch, getState) => {
    getListThreads(userId).then(threads => {
      enrichData(threads, getState)
      dispatch({
        type: GET_THREADS,
        payload: threads,
      })
      navigate(routes.Home)
    })
  }
}

function enrichData(threads, getState) {
  const usersById = getState().users.usersById
  const currentUser = getState().user
  _.map(threads, thread => {
    const idx = thread.userIds.indexOf(currentUser.id)
    const friendId = thread.userIds[idx === 1 ? 0 : 1]
    thread.friend = { id: friendId, name: usersById[friendId].name, avatar: usersById[friendId].avatar }
  })
}

function setActiveThread(threadId) {
  return (dispatch, getState) => {
    const allThreadsById = getState().threads.threadsById
    const activeThread = allThreadsById[threadId]
    dispatch({
      type: SET_ACTIVE_THREAD,
      payload: activeThread,
    })
  }
}
