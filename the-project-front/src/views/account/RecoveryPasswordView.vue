<script setup lang="ts">
import { RouterLink } from 'vue-router'
import RecoveryPasswordForm from '../../components/account/RecoveryPasswordForm.vue'
import SendRecoveryPasswordForm from '../../components/account/SendRecoveryPasswordForm.vue'
import { SIGNIN_PATH, SIGNUP_PATH } from '@/router/constants'
import { ref, onMounted } from 'vue';

const code = ref("")
const code_recovery_password = ref(false)

onMounted(() => {
  const url = new URLSearchParams(window.location.search)
  let url_code = url.get('code')
  if (url_code) {
    code.value = url_code
    code_recovery_password.value = true
  }
})
</script>

<template>
  <main>
    <div class="shadow bg-skin-background w-96">
      <div class="p-8">
        <SendRecoveryPasswordForm v-if="!code_recovery_password"/>
        <RecoveryPasswordForm :code="code" v-if="code_recovery_password"/>
        <div class="mt-8 mb-4 text-center">
          <RouterLink :to="SIGNIN_PATH">{{ $t('message.account.have_credentials') }}</RouterLink>
        </div>
        <div class="text-center">
          <RouterLink :to="SIGNUP_PATH">{{ $t('message.account.want_register') }}</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
