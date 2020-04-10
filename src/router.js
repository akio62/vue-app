import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    // { path: '/timecards', component: Login },
    // { path: '/attendances', component: Login },
    // { path: '/payslips', component: Login },
    // { path: '/settings', component: Login },
    // { path: '/employees/dashboard', component: Login },
  ]
})