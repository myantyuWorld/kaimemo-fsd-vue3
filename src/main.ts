import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("新しいバージョンが利用可能です。更新しますか？")) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    alert("アプリはオフラインでも使用できます！");
  },
});

const app = createApp(App)

app.use(router)

app.mount('#app')
