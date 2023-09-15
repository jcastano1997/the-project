<template>
    <div class="absolute flex justify-center w-full top-10">
        <div class="py-2 text-lg rounded-lg" :class="{'bg-skin-base': type == 'success', 'bg-red-500': type == 'warning'}">
            <span class="pl-4">{{ message }}</span>
            <i class="px-4 cursor-pointer fa-solid fa-close" @click="$emit('callback')"></i>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success'
  },
})
</script>