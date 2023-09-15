<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import AccountButton from './account/AccountButton.vue'
import { HOME_PATH, BLOG_PATH } from '@/router/constants'
</script>
<template>
    <div class="absolute top-0 w-full">
        <div class="flex justify-between p-1 bg-skin-background">
            <div class="flex pl-1 gap-x-2">
                <RouterLink class="" :to="HOME_PATH">{{ $t('message.home') }}</RouterLink>
                <RouterLink class="" :to="BLOG_PATH">{{ $t('message.blog') }}</RouterLink>
            </div>
            <div class="flex gap-x-1">
                <ThemeSwitcher/>
                <LanguageSwitcher/>
                <AccountButton/>
            </div>
        </div>
    </div>
</template>