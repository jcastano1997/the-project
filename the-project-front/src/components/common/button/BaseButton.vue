<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'normal'
  }
})
function callback(e: Event) {
  this.$emit('click', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <button
  class="w-full py-2 px-4 rounded-lg"
  :class="type"
  :disabled="disabled"
  @click="callback($event)">
    <slot></slot>
  </button>
</template>

<style scoped>
.outline {
  background-color: transparent;
  color: var(--color-text-base);
  border-color: var(--color-text-base);
}
</style>