<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SignInForm from '../../components/account/SignInForm.vue'
</script>

<template>
  <main>
    <div class="">
      <div>
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div>
        <SignInForm/>
        <div class="w-full text-center">
          <RouterLink to="/signin/recovery" class="text-white">Forgot your password?</RouterLink>
        </div>
        <div class="w-full text-center">
          <RouterLink to="/signup" class="text-white">I want to register</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
