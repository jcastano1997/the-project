<template>
  <div class="">
  </div>
  
  <div v-if="!done_process">
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.recovery_password') }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <BaseInput v-model="state.email" :placeholder="$t('message.account.email')" :error="v$.email.$error" :error_mensages="v$.email.$errors"></BaseInput>
      </div>
      <BaseButton type="submit" :allowed="!v$.$error">{{ $t('message.account.continue') }}</BaseButton>
    </form>
    <span v-if="invalid_credentials">{{ $t('message.account.invalid_email_credentials', { email: state.email }) }}</span>
  </div>
  <div v-if="done_process">
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.done_recovery_password') }}</h2>
    <span>{{ $t('message.account.check_email_recovery_password', { email: state.email }) }}</span>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '../common/input/BaseInput.vue'
import BaseButton from '../common/button/BaseButton.vue'

import { ref, reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import supabase from '@/services/supabase'

const invalid_credentials = ref(false)
const done_process = ref(false)

const state = reactive({
  email: '',
})

const rules = {
  email: { required, email },
}

const v$ = useVuelidate(rules, state, { $lazy: true })

async function onSubmit() {
  var isValid = await v$.value.$validate()
  if (isValid) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(state.email, {
      redirectTo: `${import.meta.env.VITE_HOST_URL}/signin/recovery` ?? 'http://localhost:5173/signin/recovery',
    })
    console.log(data)
    if (error != null) {
      console.log(error)
      invalid_credentials.value = true
    } else {
      done_process.value = true
    }
  }
}
</script>
