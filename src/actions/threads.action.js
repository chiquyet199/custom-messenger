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
  return dispatch => {
    getListThreads(userId).then(threads => {
      dispatch({
        type: GET_THREADS,
        payload: threads,
      })
      navigate(routes.Home)
    })
  }
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
