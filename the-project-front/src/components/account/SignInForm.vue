<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../common/input/BaseInput.vue'
import BaseButton from '../common/button/BaseButton.vue'
const user = ref('')
const password = ref('')

function signin() {
  console.log(user.value, password.value)
}
</script>

<template>
  <div class="bg-white justify-center flex flex-wrap gap-y-2 p-2">
    <div class="w-full text-left">
      <span class="text-black">Username</span>
    </div>
    <BaseInput v-model="user"></BaseInput>
    <div class="w-full text-left">
      <span class="text-black">Password</span>
    </div>
    <BaseInput v-model="password" type="password"></BaseInput>
    <div class="w-full text-center pt-2">
      <BaseButton @click="signin()">Sign in</BaseButton>
    </div>
  </div>
</template>

<style scoped>
</style>
