import axios from 'axios'
import config from './config'

export default {
  install (Vue) {
    Vue.prototype.$getRandomQuote = () => {
      return axios.get(`${config.HOST}/api/random-quote`)
    }

    Vue.prototype.$getProtectedQuote = () => {
      const JWT = localStorage.getItem('id_token')

      return axios.get(`${config.HOST}/api/protected/random-quote`, {
        headers: {
          'Authorization': `Bearer ${JWT}`
        }
      })
    }
  }
}
