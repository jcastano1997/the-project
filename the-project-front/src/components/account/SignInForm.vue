<script setup lang="ts">
import BaseInput from '../common/input/BaseInput.vue'
import BaseButton from '../common/button/BaseButton.vue'

import { ref, reactive } from 'vue'
import router from '@/router'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import { useAccountStore } from '@/stores/account'

import supabase from '@/services/supabase'
import { BLOG_PATH } from '@/router/constants'

const store = useAccountStore()

const invalid_credentials = ref(false)

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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password,
    })
    console.log(data)
    if (error != null) {
      console.log(error)
      invalid_credentials.value = true
    } else {
      store.signin(data.session.access_token)
      router.push(BLOG_PATH);
    }
  }
}

function onKeyup() {
  invalid_credentials.value = false
}
</script>

<template>
  <div class="">
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.login') }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <BaseInput v-model="state.email" :placeholder="$t('message.account.email')" :error="v$.email.$error" :error_mensages="v$.email.$errors" @onKeyup="onKeyup"></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput v-model="state.password" type="password" :placeholder="$t('message.account.password')" :error="v$.password.$error" :error_mensages="v$.password.$errors" @onKeyup="onKeyup"></BaseInput>
      </div>
      <BaseButton type="submit" :allowed="!v$.$error && !invalid_credentials">{{ $t('message.account.continue') }}</BaseButton>
    </form>
    <div class="pt-4 text-center" v-if="invalid_credentials">
      <span>{{ $t('message.account.invalid_credentials') }}</span>
    </div>
  </div>
</template>
