<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SignInForm from '../../components/account/SignInForm.vue'
</script>

<template>
  <main>
    <div class="shadow bg-skin-background w-96">
      <div class="p-8">
        <SignInForm/>
        <div class="mt-8 mb-4 text-center">
          <RouterLink to="/signin/recovery">{{ $t('message.account.forgotpassword') }}</RouterLink>
        </div>
        <div class="text-center">
          <RouterLink to="/signup">{{ $t('message.account.want_register') }}</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
