<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SignInForm from '../../components/account/SignInForm.vue'
import { SIGNUP_PATH, RECOVERY_PASSWORD_PATH } from '@/router/constants';
</script>

<template>
  <main>
    <div class="shadow bg-skin-background w-96">
      <div class="p-8">
        <SignInForm/>
        <div class="mt-8 mb-4 text-center">
          <RouterLink :to="RECOVERY_PASSWORD_PATH">{{ $t('message.account.forgotpassword') }}</RouterLink>
        </div>
        <div class="text-center">
          <RouterLink :to="SIGNUP_PATH">{{ $t('message.account.want_register') }}</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
