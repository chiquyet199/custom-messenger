import axios from 'axios'
import { BASE_URL } from 'configs/rest'

const options = {
  baseURL: BASE_URL,
  timeout: 6000000,
}

function post(url, data) {
  const postOptions = {
    baseURL: BASE_URL,
    timeout: 6000000,
    url,
    method: 'POST',
    data,
  }
  console.log(postOptions)
  // return axios.post({ url: `${BASE_URL}${url}`, data })
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

export default { get, post }
