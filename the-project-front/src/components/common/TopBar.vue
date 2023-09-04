<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
</script>
<template>
    <div class="flex justify-between p-1 bg-skin-background">
        <div class="">
            <RouterLink class="" to="/">{{ $t('message.home') }}</RouterLink>
        </div>
        <div class="flex gap-x-1">
            <ThemeSwitcher/>
            <LanguageSwitcher/>
        </div>
    </div>
</template>