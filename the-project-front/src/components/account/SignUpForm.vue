<template>
  <div v-if="!done_process">
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.register') }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <BaseInput v-model="state.email" :placeholder="$t('message.account.email')" :error="v$.email.$error" :error_mensages="v$.email.$errors"></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput type="password" v-model="state.password" :placeholder="$t('message.account.password')" :error="v$.password.$error" :error_mensages="v$.password.$errors"></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput type="password" v-model="state.repeat_password" :placeholder="$t('message.account.repeat_password')" :error="v$.repeat_password.$error" :error_mensages="v$.repeat_password.$errors"></BaseInput>
      </div>
      <BaseButton type="submit" :allowed="!v$.$error">{{ $t('message.account.continue') }}</BaseButton>
    </form>
    <span v-if="email_already_in_use">{{ $t('message.account.email_already_in_use') }}</span>
  </div>
  <div v-if="done_process">
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.done_register') }}</h2>
    <span>{{ $t('message.account.check_email_confirmation', { email: state.email }) }}</span>
  </div>
</template>
<script setup lang="ts">
import BaseInput from '../common/input/BaseInput.vue'
import BaseButton from '../common/button/BaseButton.vue'

import { ref, reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

import supabase from '@/services/supabase'

const done_process = ref(false)
const email_already_in_use = ref(false)

const state = reactive({
  email: '',
  password: '',
  repeat_password: '',
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
  repeat_password: { required, minLength: minLength(6), sameAsPassword: sameAs(computed(() => state.password)) }
}

const v$ = useVuelidate(rules, state, { $lazy: true })

async function onSubmit() {
  var isValid = await v$.value.$validate()
  if (isValid) {
    const { data, error } = await supabase.auth.signUp({
      email: state.email,
      password: state.password,
    })
    console.log(data)
    if (error != null) {
      console.log(error)
      email_already_in_use.value = true
    } else {
      done_process.value = true
    }
  }
}
</script>
