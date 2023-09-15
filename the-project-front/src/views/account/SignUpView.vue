<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SignUpForm from '../../components/account/SignUpForm.vue'
import { SIGNIN_PATH } from '@/router/constants';
</script>

<template>
  <main>
    <div class="shadow bg-skin-background w-96">
      <div class="p-8">
        <SignUpForm/>
        <div class="mt-8 text-center">
          <RouterLink :to="SIGNIN_PATH">{{ $t('message.account.have_credentials') }}</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
