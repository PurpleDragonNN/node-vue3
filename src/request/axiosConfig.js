import axios from 'axios'
let baseURL = ''

const instance = axios.create({
  baseURL,
  timeout: 10000,

})
instance.interceptors.response.use(response => {
  return response.data
})

export default instance
