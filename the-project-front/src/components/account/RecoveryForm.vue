<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../common/input/BaseInput.vue'
const email = ref('')

function recovery() {
  console.log(email.value)
}
</script>

<template>
  <div class="bg-slate-400 justify-center flex flex-wrap gap-y-2">
    <BaseInput v-model="email"></BaseInput>
    <button @click="recovery()">Recovery</button>
  </div>
</template>

<style scoped>
</style>
