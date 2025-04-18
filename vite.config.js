import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // vueDevTools(),

        ElementPlus({
            useSource: true
        }),
        AutoImport({
            resolvers: [ElementPlusResolver({importStyle: 'sass'})]
        }),
        Components({
            resolvers: [ElementPlusResolver({importStyle: 'sass'})]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    css:{
      preprocessOptions:{
        scss:{
          //自动导入定制化样式文件
          additionalData: `@import "@/assets/index.scss";`
        }
      }
    }
})
