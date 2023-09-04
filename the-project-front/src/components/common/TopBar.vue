<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
</script>
<template>
    <div class="bg-skin-background flex justify-between">
        <div>
            <RouterLink class="" to="/">Home</RouterLink>
        </div>
        <div class="flex">
            <ThemeSwitcher/>
            <LanguageSwitcher/>
        </div>
    </div>
</template>