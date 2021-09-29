import {createApp} from 'vue'
import {store, key} from './store/index'
import router from './router/index'
import App from './App.vue'
// import 'element-plus/packages/theme-chalk/src/base.scss'
// import {ElButton} from 'element-plus'

// const components = [ElButton]
const app = createApp(App)
// app.component(ElButton.name, ElButton)
// components.forEach(component => {
//     app.component(component.name, component)
// })
app.use(store, key)
app.use(router)
app.mount('#app')