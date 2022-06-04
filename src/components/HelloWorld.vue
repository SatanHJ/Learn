<!--
 * @Descripttion: 
 * @Company: HJ
 * @version: v1.0
 * @Author: HJ
 * @Date: 2022-06-04 06:21:47
 * @LastEditors: HJ
 * @LastEditTime: 2022-06-04 06:30:35
-->
<script setup lang="ts">
import {learn01} from './learn01'
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

learn01()
</script>

<template>
  
</template>
