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
  <div class="">
    <h2 class="text-2xl font-semibold mb-4">Login</h2>
    <form>
      <div class="mb-4">
        <BaseInput v-model="user" placeholder="Username"></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput v-model="password" type="password" placeholder="Password" required></BaseInput>
      </div>
      <BaseButton @click="signin()">Sign in</BaseButton>
    </form>
  </div>
</template>

<style scoped>
</style>

