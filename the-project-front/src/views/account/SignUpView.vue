<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SignUpForm from '../../components/account/SignUpForm.vue'
</script>

<template>
  <main>
    <div class="">
      <div>
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div>
        <SignUpForm/>
      </div>
    </div>
  </main>
</template>
