<template>
  <div class="p-4 border rounded">
    <div>
      <h2 class="text-2xl font-semibold">{{ title }}</h2>
    </div>
    <div class="mt-2">
      <span>{{ body }}</span>
    </div>
    <hr class="my-2 border-skin-placeholder">
    <div class="flex justify-between text-sm">
      <span class="text-skin-placeholder">{{ created_at }}</span>
      <span class="text-skin-placeholder">{{ $t('preposition.by') }} {{ user_name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: false
  },
  user_reference: {
    type: String,
    required: false
  }
})
</script>
