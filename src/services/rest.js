import Api from 'services/api'

export {
  getListThreads,
  createNewThread,
  getMessageThread,
  createNewMessage,
  getListUsers,
  getUser,
  addFriend,
  getListNewMessages,
  markAsSeenByUser,
}

function getListUsers() {
  return new Promise(resolve => {
    Api.get('/users').then(response => {
      resolve(response.data.users)
    })
  })
}
function getUser(userId) {
  return new Promise(resolve => {
    Api.get(`/users/${userId}`).then(response => {
      resolve()
    })
  })
}
function getListNewMessages(userId) {
  return new Promise(resolve => {
    Api.get(`/users/${userId}/new-messages`).then(response => {
      resolve()
    })
  })
}
function getListThreads(userId) {
  return new Promise(resolve => {
    Api.get('/threads', { userId }).then(response => {
      resolve(response.data.threads)
    })
  })
}
function getMessageThread(threadId) {
  return new Promise(resolve => {
    Api.get(`/threads/${threadId}`).then(response => {
      resolve(response.data)
    })
  })
}
function createNewThread(userIds) {
  return new Promise(resolve => {
    Api.post('/threads', userIds).then(response => {
      resolve(response)
    })
  })
}
function createNewMessage(threadId, senderId, text) {
  return new Promise(resolve => {
    Api.post(`/threads/${threadId}/messages`, { senderId, text }).then(response => {
      resolve(response)
    })
  })
}
function addFriend() {}
function markAsSeenByUser() {}
