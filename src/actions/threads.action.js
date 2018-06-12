import _ from 'lodash'
import { getListThreads, createNewThread, getMessageThread, createNewMessage } from 'services/rest'

export const CREATE_THREAD = 'CREATE_THREAD'
export const GET_THREADS = 'GET_THREADS'
export const CLEAR_ACTIVE_THREAD = 'CLEAR_ACTIVE_THREAD'
export const SET_ACTIVE_THREAD = 'SET_ACTIVE_THREAD'
export const CREATE_NEW_MESSAGE = 'CREATE_NEW_MESSAGE'

import { navigate } from 'services/navigate'
import routes from 'configs/routes'

export { createThread, getThreads, setActiveThread, clearActiveThread, createNewThreadMessage }

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
      navigate(routes.Threads)
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
    thread.lastMessage = thread.messages[thread.messages.length - 1].text
  })
}

function setActiveThread(threadId) {
  return (dispatch, getState) => {
    getMessageThread(threadId).then(activeThread => {
      const allThreadsById = getState().threads.threadsById
      const extendActiveThread = allThreadsById[threadId]
      dispatch({
        type: SET_ACTIVE_THREAD,
        payload: { ...extendActiveThread, messages: activeThread.messages, userIds: activeThread.userIds },
      })
    })
  }
}

function createNewThreadMessage(messages) {
  return (dispatch, getState) => {
    const state = getState()
    const activeThread = state.threads.activeThread
    const currentUser = state.user
    if (!activeThread || !currentUser) return
    dispatch({
      type: CREATE_NEW_MESSAGE,
      payload: {
        id: 'bus-w123',
        image: 'https://qz.com/wp-content/uploads/2015/10/rtr398ek.jpg?quality=80&strip=all&w=3200',
        senderId: 'u1',
        text: 'Hello, how r u today?',
        timestamp: 123456789,
      },
    })
    // createNewMessage(activeThread.id, currentUser.id, messages).then(newMessage => {
    //   dispatch({ type: CREATE_NEW_MESSAGE, payload: newMessage })
    // })
  }
}
