import axios from 'axios'
import config from './config'

export default {
  install (Vue) {
    Vue.prototype.$signUp = (username, password) => {
      return axios.post(`${config.HOST}/users`, {
        username,
        password
      })
    }

    Vue.prototype.$signIn = (data) => {
      return axios.post(`${config.HOST}/sessions/create`, {
        username: data.username,
        password: data.password
      })
    }
  }
}