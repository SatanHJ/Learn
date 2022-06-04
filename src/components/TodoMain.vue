<!--
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 07:14:01
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-05 01:03:03
-->
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="mainRadioStatus"
      @change="handleAllStatus(!mainRadioStatus)" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <TodoItem v-for="item in renderList" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'

import { storeToRefs } from 'pinia'
import useStore from '../store'

import { ITdoItem } from '../types/data'

const { main } = useStore()
const { getTodos, updateAllStatus } = main
const { renderList, mainRadioStatus } = storeToRefs(main)

const handleAllStatus = (done: boolean) => updateAllStatus(done)

getTodos()

</script>