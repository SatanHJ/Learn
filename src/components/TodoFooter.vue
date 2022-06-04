<!--
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 07:14:09
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-05 00:55:57
-->
<template>
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ unCompleted.length || 0 }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li v-for="item in tags" :key="item" @click="changeActive(item)">
        <a :class="{ 'selected': item === active }" :href="`#/${item}`">{{ item }}</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useStore from '../store';
import { TActive } from '../types/data';

const { main, footer } = useStore()
const { clearCompleted } = main
const { unCompleted } = storeToRefs(main)
const { changeActive } = footer
const { tags, active } = storeToRefs(footer)

function initActive() {
  const hs = window.location.hash
  const activeHs = (hs === '#/Active' || hs === '#/Compelted' ? hs.slice(2) : 'All') as TActive
  changeActive(activeHs)
}
initActive()
</script>