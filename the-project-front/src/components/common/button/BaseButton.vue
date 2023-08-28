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
  :class="type"
  :disabled="disabled"
  @click="callback($event)">
    <slot></slot>
  </button>
</template>

<style scoped>
.normal {
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
}
</style>
