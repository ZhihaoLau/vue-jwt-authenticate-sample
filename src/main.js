// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import RandomQuote from './components/RandomQuote.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import ProtectedQuote from './components/ProtectedQuote.vue'
import Quote from './Quote'
import User from './User'

/**
 * Using Vue Plugins
 * [Reference] https://vuejs.org/v2/guide/plugins.html
 */
Vue.use(VueRouter)
Vue.use(User)
Vue.use(Quote)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '/', component: RandomQuote },
      { path: '/signup', component: SignUp },
      { path: '/signin', component: SignIn },
      { path: '/protected-quote', component: ProtectedQuote }
    ]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')

