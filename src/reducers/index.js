import common from './common.reducer'
import user from './user.reducer'
import users from './users.reducer'
import threads from './threads.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  common,
  user,
  users,
  threads,
})

const appState = {
  users: [
    {
      friendIds: null,
      id: 'u2',
      name: 'rocket man',
    },
    {
      friendIds: ['u5'],
      id: 'u3',
      name: 'vladimir',
    },
    {
      friendIds: null,
      id: 'u4',
      name: 'angela',
    },
    {
      friendIds: ['u2', 'u3'],
      id: 'u5',
      name: 'xi',
    },
    {
      friendIds: ['u3'],
      id: 'u1',
      name: 'donald',
    },
  ],
  currentUser: {
    friendIds: ['u3'],
    id: 'u1',
    name: 'donald',
  },
  friendList: [
    {
      id: 'u3',
      name: 'michale',
    },
    {
      id: 'u4',
      name: 'thomas',
    },
  ],
  threads: [
    {
      id: 't1',
      messages: [
        {
          id: 't1-1',
          senderId: 'u1',
          text: 'Hey Rocket Man I have more rockets than you have',
          timestamp: 1234567890,
        },
        {
          id: 't1-2',
          senderId: 'u2',
          text: 'But I have more hair than you',
          timestamp: 1234567891,
        },
        {
          id: 't1-3',
          senderId: 'u1',
          text: 'I have real hair. Everything else is FAKE NEWS',
          timestamp: 1234567890,
        },
      ],
      userIds: ['u1', 'u2'],
    },
  ],
}

const state = {
  user: {},
  friends: [],
  threads: [],
}
