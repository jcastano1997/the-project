<template>
    <div class="relative flex flex-wrap">
        <div>
            <button class="p-0" :class="{'bg-skin-hover':show}" v-on:click="show = !show"><i id="change-theme-icon" class="fa-solid fa-palette p-1 text-skin-secondary"></i></button>
        </div>
        <transition>
            <div id="change-theme-div" v-if="show" class="w-full px-4 py-2 absolute w-48 text-center bg-skin-background right-0 top-6 rounded border border-skin-base">
                <label id="change-theme-label"
                    for="themes"
                    class="text-skin-base"
                    >CHOOSE A THEME</label
                >
                <select id="change-theme-select"
                    v-model="theme"
                    @input="changeTheme"
                    class="w-full cursor-pointer text-sm mt-1 text-skin-secondary bg-transparent border border-skin-base rounded"
                >
                    <option value="console-theme" class="bg-skin-background">Default (Console)</option>
                    <option value="light-theme" class="bg-skin-background">Light</option>
                    <option value="red-theme" class="bg-skin-background">Red</option>
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
    const themedContainer = document.querySelector("body > div") as HTMLDivElement
    themedContainer.className = e.target.value;
    show.value = false;
}

onMounted(()=>{
    window.addEventListener("click", (event) => {
        console.log("event.target.id", event.target);
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
