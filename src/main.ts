import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './assets/style/element/index.scss'
// import 'element-plus/theme-chalk/index.css'
const app = createApp(App)

// app.config.globalProperties.$API = API
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
