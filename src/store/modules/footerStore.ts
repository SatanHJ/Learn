/*
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 07:25:33
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-05 00:49:51
 */
import {defineStore} from 'pinia'
import { TActive } from '../../types/data'

const footerStore = defineStore('footer', {
  state: () => {
    return {
      tags: ['All', 'Active', 'Completed'] as TActive[],
      active: 'All' as TActive
    }
  },
  actions: {
    changeActive(active: TActive) {
      this.active = active
    }
  }
})

export default footerStore