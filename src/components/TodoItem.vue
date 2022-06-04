<!--
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 23:47:32
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-05 00:38:17
-->
<template>
  <li :class="{ 'completed': item.done, 'editing': isEdite }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="handleChangeInput(item)" />
      <label @dblclick="handleEditeClick">{{ item.name }}</label>
      <button class="destroy" @click="delTodo(item.id)"></button>
    </div>
    <input class="edit" v-model="editContext" ref="inputRef" @blur="handlerBlur" @keyup="e => handleKeyup(e)" />
  </li>
</template>

<script setup lang="ts">
import { defineProps, nextTick, ref } from 'vue'

import { ITdoItem } from '../types/data'

import useStore from '../store'
const { main } = useStore()
const { delTodo, updateTodo } = main

const isEdite = ref(false)
const editContext = ref('')
const inputRef = ref<HTMLInputElement | null>()

const handleChangeInput = (item: ITdoItem) => updateTodo(item.id, 'done', !item.done)

const handleEditeClick = () => {
  isEdite.value = true
  editContext.value = props.item.name
  nextTick(() => inputRef.value?.focus())
}

const handlerBlur = () => {
  isEdite.value = false
  editContext.value = ''
}

const handleKeyup = (e: KeyboardEvent) => {
  const { key } = e
  if (key === 'Escape') {
    handlerBlur()
  }
  if (key === 'Enter') {
    if (editContext.value.trim() === '') return alert('不能为空')
    updateTodo(props.item.id, 'name', editContext.value)
  }
}

const props = defineProps<{
  item: ITdoItem
}>()
</script>