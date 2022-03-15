import axios from './axiosConfig'
// import QS from 'qs'

const postReq = (url,data,config) => {
  return axios.post(url,data,config).then(res => {
    return new Promise(resolve => {
      if (res.code === 0) {
        resolve(res.results)
      } else {
        console.log(res.msg)
      }
    })
  })
}

export default {
  getCityList: (data,config) => {
    return postReq('http://localhost:4000/',data,config)
  }
}
