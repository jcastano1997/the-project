<script setup lang="ts">
import { RouterLink } from 'vue-router'
import RecoveryForm from '../../components/account/RecoveryForm.vue'
</script>

<template>
  <main>
    <div class="">
      <div>
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div>
        <RecoveryForm/>
        <RouterLink to="/signin">I have my credentials</RouterLink>
        <RouterLink to="/signup">I want to register</RouterLink>
      </div>
    </div>
  </main>
</template>
