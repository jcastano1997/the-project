<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../common/input/BaseInput.vue'
import BaseButton from '../common/button/BaseButton.vue'
const email = ref('')

function recovery() {
  console.log(email.value)
}
</script>

<template>
  <div class="">
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.recovery_password') }}</h2>
    <form>
      <div class="mb-4">
        <BaseInput v-model="email" :placeholder="$t('message.account.email')" required></BaseInput>
      </div>
      <BaseButton @click="recovery()">{{ $t('message.account.continue') }}</BaseButton>
    </form>
  </div>
</template>
