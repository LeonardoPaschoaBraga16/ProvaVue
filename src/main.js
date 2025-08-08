import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import ConsultaCep from './components/ConsultaCep.vue'

const app = createApp(App)

app.component('ConsultaCep', ConsultaCep)
app.use(store)
app.mount('#app')
