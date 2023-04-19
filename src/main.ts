import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/index.scss"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(UndrawUi)
app.mount('#app')
