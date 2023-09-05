<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../common/input/BaseInput.vue'
import BaseButton from '../common/button/BaseButton.vue'
const email = ref('')
const password = ref('')
const repeat_password = ref('')

function signup() {
  console.log(email.value, password.value)
}
</script>

<template>
  <div class="">
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.register') }}</h2>
    <form>
      <div class="mb-4">
        <BaseInput v-model="email" :placeholder="$t('message.account.email')" required></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput v-model="password" :placeholder="$t('message.account.password')" required></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput v-model="repeat_password" :placeholder="$t('message.account.repeat_password')" required></BaseInput>
      </div>
      <BaseButton @click="signup()">{{ $t('message.account.continue') }}</BaseButton>
    </form>
  </div>
</template>

<style scoped>
</style>
