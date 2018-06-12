import _ from 'lodash'
import {
  CLEAR_ACTIVE_THREAD,
  GET_THREADS,
  SET_ACTIVE_THREAD,
  CREATE_THREAD,
  CREATE_NEW_MESSAGE,
} from 'actions/threads.action'

const initialState = { threadsById: {}, threadsByList: [], activeThread: null }

const actionHandlers = {}

actionHandlers[CREATE_THREAD] = (state, newThread) => {
  return {
    ...state,
    threadsByList: [...state.threadsByList, newThread],
    threadsById: { ...state.threadsById, [newThread.id]: newThread },
  }
}

actionHandlers[SET_ACTIVE_THREAD] = (state, activeThread) => {
  return { ...state, activeThread }
}

actionHandlers[CLEAR_ACTIVE_THREAD] = state => {
  return { ...state, activeThread: null }
}

actionHandlers[CREATE_NEW_MESSAGE] = (state, newMessage) => {
  return {
    ...state,
    activeThread: { ...state.activeThread, messages: [...state.activeThread.messages, newMessage] },
  }
}

actionHandlers[GET_THREADS] = (state, threads) => {
  const threadsById = _.reduce(
    threads,
    function(obj, thread) {
      obj[thread.id] = thread
      return obj
    },
    {},
  )
  return { ...state, threadsById, threadsByList: threads }
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
