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
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.login') }}</h2>
    <form>
      <div class="mb-4">
        <BaseInput v-model="user" :placeholder="$t('message.account.username')" required></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput v-model="password" type="password" :placeholder="$t('message.account.password')" required></BaseInput>
      </div>
      <BaseButton @click="signin()">{{ $t('message.account.continue') }}</BaseButton>
    </form>
  </div>
</template>

<style scoped>
</style>

