<script setup lang="ts">
import BaseInput from '../common/input/BaseInput.vue'
import BaseButton from '../common/button/BaseButton.vue'

import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

const state = reactive({
  email: '',
  password: '',
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, state, { $lazy: true })

async function onSubmit() {
  var isValid = await v$.value.$validate()
  if (isValid) {
    console.log(state.email, state.password)
  }
}
</script>

<template>
  <div class="">
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.login') }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <BaseInput v-model="state.email" :placeholder="$t('message.account.email')" :error="v$.email.$error" :error_mensages="v$.email.$errors"></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput v-model="state.password" type="password" :placeholder="$t('message.account.password')" :error="v$.password.$error" :error_mensages="v$.password.$errors"></BaseInput>
      </div>
      <BaseButton type="submit" :allowed="!v$.$error">{{ $t('message.account.continue') }}</BaseButton>
    </form>
  </div>
</template>
