<script setup lang="ts">
type ErrorObject = /*unresolved*/ any

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
  },
  error: {
    type: Boolean,
    default: false
  },
  error_mensages: {
    type: Array<ErrorObject>
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full">
    <input :type="type"
      :placeholder="placeholder"
      class="w-full px-3 py-2 rounded-lg"
      :class="{'input-error': error}"
      :value="modelValue"
      @input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
      @keyup="$emit('onKeyup')">
    <div class="input-errors" v-for="error of error_mensages" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>
