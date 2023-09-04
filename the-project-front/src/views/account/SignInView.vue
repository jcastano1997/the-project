<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SignInForm from '../../components/account/SignInForm.vue'
</script>

<template>
  <main>
    <div class="bg-skin-background shadow w-96">
      <div class="p-8">
        <SignInForm/>
        <div class="text-center mb-4 mt-8">
          <RouterLink to="/signin/recovery">Forgot your password?</RouterLink>
        </div>
        <div class="text-center">
          <RouterLink to="/signup">I want to register</RouterLink>
        </div>
        <div class="w-full text-center">
        </div>
        <div class="w-full text-center">
        </div>
      </div>
    </div>
  </main>
</template>
