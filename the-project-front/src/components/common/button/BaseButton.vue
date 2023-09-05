<script setup lang="ts">
import type { PropType, ButtonHTMLAttributes } from 'vue';

defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button'
  },
  class: {
    type: String,
    default: 'normal'
  },
  allowed: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <button
  class="w-full px-4 py-2 rounded-lg"
  :class="{'button-disabled': disabled || !allowed}"
  :type="type"
  :disabled="disabled">
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