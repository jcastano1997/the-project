<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full">
    <input :type="type" class="w-full bg-black text-white p-1" :value="modelValue" @input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement).value)">
  </div>
</template>

<style scoped>
</style>
