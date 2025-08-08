import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/Home.vue'
import ConsultaCep from './components/ConsultaCep.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/consulta-cep',
    name: 'ConsultaCep',
    component: ConsultaCep
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
