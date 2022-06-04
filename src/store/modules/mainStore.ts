/*
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 07:25:24
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-05 01:11:04
 */
import { defineStore } from 'pinia'
import { ITdoItem } from '../../types/data'
import request from '../../utils/request'
import footerStore from './footerStore'

const mainStore = defineStore('main', {
  state: () => {
    return {
      list: [] as ITdoItem[]
    }
  },
  actions: {
    async getTodos() {
      const { data } = await request.get<ITdoItem[]>('/')
      this.list = data
    },
    async delTodo(id: number) {
      await request.delete(`/${id}`)
      this.getTodos()
    },
    async updateTodo(id: number, key: string, value: string | boolean) {
      await request.patch(`/${id}`, {
        [key]: value
      })
      this.getTodos()
    },
    async addTodo(name: string) {
      await request.post('/', {
        name,
        done: false
      })
      this.getTodos()
    },
    async updateAllStatus(done: boolean) {
      const arrPromise = this.list.map(item => this.updateTodo(item.id, 'done', done))
      await Promise.all(arrPromise)
      this.getTodos()
    },
    async clearCompleted() {
      const arrPromise = this.completed.map(item => this.delTodo(item.id))
      await Promise.all(arrPromise)
      this.getTodos()
    }
  },
  getters: {
    mainRadioStatus(state) {
      return state.list.every(item => item.done)
    },
    completed(state): ITdoItem[] {
      return state.list.filter(item => item.done)
    },
    unCompleted(state): ITdoItem[] {
      return (state.list.filter(item => !item.done)) as ITdoItem[]
    },
    renderList(state): ITdoItem[] {
      const { active } = footerStore()
      if (active === 'Active') return this.unCompleted
      if (active === 'Completed') return this.completed
      return state.list
    }
  }
})

export default mainStore