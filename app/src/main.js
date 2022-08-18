import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCookies from 'vue-cookies'
import FloatingVue from 'floating-vue'

library.add(fas)
library.add(far)

import App from './App.vue'
import router from './router'
import './index.css'
import 'floating-vue/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueCookies, { expire: '1d' })
app.use(router)
app.use(FloatingVue)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
