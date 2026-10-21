import { createApp } from 'vue'
import App from './App.vue'
import halleyxComponents from 'halleyx-ui-framework/dist/es/index.js'
import router from './router'
import 'halleyx-ui-framework/dist/es/index.css'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(halleyxComponents)
app.mount('#app')

 