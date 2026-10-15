//create vue app instance
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//create the vue application
const app=createApp(App)

//register the router
app.use(router)


//mount the application in HTML id = app
app.mount('#app')