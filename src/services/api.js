import axios from 'axios'
import { BASE_URL } from 'configs/rest'

const options = {
  baseURL: BASE_URL,
  timeout: 6000000,
}

function post(url, data) {
  const postOptions = { ...options, url, method: 'POST', data }
  return axios(postOptions).then(logApiCall)
}

function get(url, params) {
  const getOptions = { ...options, url, params, method: 'GET' }
  return axios(getOptions).then(logApiCall)
}

function logApiCall(response) {
  console.log(response)
  return new Promise(resolve => {
    resolve(response)
  })
}

function handleError() {}

export default { get, post }
