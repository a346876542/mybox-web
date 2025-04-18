import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import '@/assets/global.css'


const app = createApp(App);

app.use(router);
// 组件设置文中文
app.use(ElementPlus, {
    locale: zhCn,
})
// icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount("#app");