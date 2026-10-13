//creates a Vue application instance
import { createApp } from 'vue'
import './style.css'
//importing the root component
import App from './App.vue'

//mount() method tells Vue where to render the application.
createApp(App).mount('#app')
