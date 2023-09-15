<template>
  <div>
    <h2 class="mb-4 text-2xl font-semibold">{{ $t('message.account.recovery_password') }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <BaseInput type="password" v-model="state.password" :placeholder="$t('message.account.new_password')" :error="v$.password.$error" :error_mensages="v$.password.$errors"></BaseInput>
      </div>
      <div class="mb-4">
        <BaseInput type="password" v-model="state.repeat_password" :placeholder="$t('message.account.repeat_password')" :error="v$.repeat_password.$error" :error_mensages="v$.repeat_password.$errors"></BaseInput>
      </div>
      <BaseButton type="submit" :allowed="!v$.$error && !invalid_code">{{ $t('message.account.continue') }}</BaseButton>
    </form>
    <span v-if="invalid_code || error_update_credentials">{{ $t('error.unexpected') }}</span>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '../common/input/BaseInput.vue'
import BaseButton from '../common/button/BaseButton.vue'

import { ref, reactive, computed, onMounted } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, sameAs } from '@vuelidate/validators'

import supabase from '@/services/supabase'
import router from '@/router'
import { SIGNIN_PATH } from '@/router/constants'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
})

const invalid_code = ref(false)
const error_update_credentials = ref(false)

const state = reactive({
  password: '',
  repeat_password: '',
})

const rules = {
  password: { required, minLength: minLength(6) },
  repeat_password: { required, minLength: minLength(6), sameAsPassword: sameAs(computed(() => state.password)) }
}

const v$ = useVuelidate(rules, state, { $lazy: true })

async function onSubmit() {
  if (!invalid_code.value) {
    var isValid = await v$.value.$validate()
    if (isValid) {
      const { data, error } = await supabase.auth.updateUser({ password: state.password })
      console.log(data)
      if (error != null) {
        console.log(error)
        error_update_credentials.value = true
      } else {
        router.push(`${SIGNIN_PATH}#success_description=${$t('message.account.success_updated_password')}`)
      }
    }
  }
}

onMounted(async () => {
  console.log(`is mounted and the code is ${props.code}`)
  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(props.code)
    console.log(data)
    if (error != null) {
      console.log(error)
      invalid_code.value = true
    }
  } catch (error) {
    console.error(error)
    invalid_code.value = true
  }
})
</script>
