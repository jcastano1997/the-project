<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../common/input/BaseInput.vue'
const email = ref('')
const password = ref('')

function signup() {
  console.log(email.value, password.value)
}
</script>

<template>
  <div class="bg-slate-400 justify-center flex flex-wrap gap-y-2">
    <BaseInput v-model="email"></BaseInput>
    <BaseInput v-model="password"></BaseInput>
    <button @click="signup()">Sing up</button>
    <RouterLink to="/signin">I have my credentials</RouterLink>
  </div>
</template>

<style scoped>
</style>
