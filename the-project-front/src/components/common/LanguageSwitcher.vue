<template>
    <div class="flex flex-wrap">
        <div>
            <button class="p-0" :class="{'bg-skin-hover':show}">
                <i id="change-language-icon" v-on:click="show = !show" class="p-1 fa-solid fa-globe text-skin-secondary"></i>
            </button>
        </div>
        <transition name="fade">
            <div id="change-language-div" v-if="show" class="absolute right-0 w-auto px-4 py-2 text-center border rounded bg-skin-background top-7 border-skin-base">
                <label id="change-language-label"
                    for="languages"
                    class="text-skin-base">{{ $t('message.language.choose') }}</label
                >
                <select id="change-language-select"
                    v-model="language"
                    @input="changeLanguage"
                    class="w-full mt-1 text-sm bg-transparent border rounded cursor-pointer text-skin-secondary border-skin-base"
                >
                    <option value="es" class="bg-skin-background">{{ $t('message.language.es') }}</option>
                    <option value="en" class="bg-skin-background">{{ $t('message.language.en') }}</option>
                </select>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import { i18n } from '@/i18n'
import { ref, onMounted } from 'vue'
import { useLocaleStore } from '@/stores/locale'

const show = ref<boolean>(false);
const store = useLocaleStore()
const { language } = store

function changeLanguage(e: Event) {
    store.changeLanguage(e.target.value);
    i18n.global.locale = e.target.value;
    show.value = false;
}

onMounted(()=>{
    window.addEventListener("click", (event) => {
        if (show.value) {
            if (event.target.id != "change-language-icon"
            && event.target.id != "change-language-div"
            && event.target.id != "change-language-label"
            && event.target.id != "change-language-select") {
                show.value = false;
            }
        }
    });
})
</script>
<style>
.fade-enter-active {
  animation: fade-in .25s;
}
.fade-leave-active {
  animation: fade-in .25s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
