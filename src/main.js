import { createApp } from 'vue'
import { createPinia } from 'pinia'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

// 通过引入normalize.css让不同的浏览器在渲染网页元素的时候形式更统一
import 'normalize.css'
import './style/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue))
  app.component(key, component)

app.mount('#app')
