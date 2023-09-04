<script setup lang="ts">
import TopBar from '../components/common/TopBar.vue'
</script>

<template>
  <main class="w-full h-full">
    <div class="w-full h-full -mt-4">
      <div class="absolute w-full top-0">
        <TopBar/>
      </div>
      <div class="flex justify-center w-full h-full mt-4">
        <div class="my-auto">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
