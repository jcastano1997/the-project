<template>
    <div class="flex flex-wrap">
        <div>
            <button class="p-0" :class="{'bg-skin-hover':show}">
                <i id="change-theme-icon" v-on:click="show = !show" class="p-1 fa-solid fa-palette text-skin-secondary"></i>
            </button>
        </div>
        <transition name="bounce">
            <div id="change-theme-div" v-if="show" class="absolute w-auto px-4 py-2 text-center border rounded right-7 top-7 bg-skin-background border-skin-base">
                <label id="change-theme-label"
                    for="themes"
                    class="text-skin-base">{{ $t('message.theme.choose') }}</label
                >
                <select id="change-theme-select"
                    v-model="theme"
                    @input="changeTheme"
                    class="w-full mt-1 text-sm bg-transparent border rounded cursor-pointer text-skin-secondary border-skin-base"
                >
                    <option value="console-theme" class="bg-skin-background">{{ $t('message.theme.default') }}</option>
                    <option value="light-theme" class="bg-skin-background">{{ $t('message.theme.light') }}</option>
                    <option value="red-theme" class="bg-skin-background">{{ $t('message.theme.red') }}</option>
                </select>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const show = ref<boolean>(false);
const store = useThemeStore()
const { theme } = store

function changeTheme(e: Event) {
    store.changeTheme(e.target.value);
    const themedContainer = document.querySelector("body > div") as HTMLDivElement;
    themedContainer.className = e.target.value;
    show.value = false;
}

onMounted(()=>{
    const themedContainer = document.querySelector("body > div") as HTMLDivElement;
    themedContainer.className = theme;
    window.addEventListener("click", (event) => {
        if (show.value) {
            if (event.target.id != "change-theme-icon"
            && event.target.id != "change-theme-div"
            && event.target.id != "change-theme-label"
            && event.target.id != "change-theme-select") {
                show.value = false;
            }
        }
    });
})
</script>
<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>