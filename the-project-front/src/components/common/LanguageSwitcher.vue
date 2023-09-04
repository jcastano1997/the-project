<template>
    <div class="relative flex flex-wrap">
        <div>
            <button class="p-0" :class="{'bg-skin-hover':show}" v-on:click="show = !show"><i id="change-language-icon" class="fa-solid fa-globe p-1 text-skin-secondary"></i></button>
        </div>
        <transition>
            <div id="change-language-div" v-if="show" class="w-full px-4 py-2 absolute w-56 text-center bg-skin-background right-0 top-6 rounded border border-skin-base">
                <label id="change-language-label"
                    for="languages"
                    class="text-skin-base"
                    >CHOOSE A LANGUAGE</label
                >
                <select id="change-language-select"
                    v-model="language"
                    @input="changeLanguage"
                    class="w-full cursor-pointer text-sm mt-1 text-skin-secondary bg-transparent border border-skin-base rounded"
                >
                    <option value="es" class="bg-skin-background">es</option>
                    <option value="en" class="bg-skin-background">en</option>
                </select>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const show = ref<boolean>(false);
const language = ref<string>('es');

function changeLanguage(e: Event) {
    language.value = e.target.value;
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
