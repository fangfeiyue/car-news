import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerApp } from '@/utils'
import { subNavList } from '@/store/sub.js'

registerApp(subNavList)

createApp(App).use(router).mount("#micro_web_main_app");
