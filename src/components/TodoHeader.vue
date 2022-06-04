<!--
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 07:13:48
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-04 23:59:36
-->
<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="name" @keyup.enter="handleAdd" />
  </header>
</template>

<script setup lang="ts">
import useStore from '../store';
import { ref } from 'vue';

const { main } = useStore()
const { addTodo } = main

const name = ref('')

const handleAdd = () => {
  if(name.value.trim() === '') return alert('请输入')

  addTodo(name.value)

  name.value = ''
}
</script>