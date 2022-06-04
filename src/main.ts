/*
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 06:21:47
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-04 07:20:20
 */
import { createApp } from 'vue'
import './styles/base.css'
import './styles/index.css'
import App from './App.vue'

// 引用 pinia
import {createPinia} from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).mount('#app')