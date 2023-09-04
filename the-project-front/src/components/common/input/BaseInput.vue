<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: false
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full">
    <input :type="type"
      :placeholder="placeholder"
      class="w-full px-3 py-2 rounded-lg"
      :value="modelValue"
      @input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement).value)">
  </div>
</template>

<style scoped>
</style>

