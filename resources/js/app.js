import './bootstrap';

import BroadcastEvent from './components/BroadcastEvents.vue'
import {createApp} from 'vue/dist/vue.esm-bundler.js'

const app = createApp({})
app.component('broadcast-event', BroadcastEvent)
app.mount("#app")
