<template>
    <div class="flex flex-wrap">
        <div>
            <button class="p-0" :class="{'bg-skin-hover':show}">
                <i id="change-account-icon" v-on:click="show = !show" class="p-1 fa-solid fa-user text-skin-secondary"></i>
            </button>
        </div>
        <transition name="fade">
            <div id="change-account-div" v-if="show" class="absolute right-0 w-auto px-4 py-2 text-center border rounded bg-skin-background top-7 border-skin-base">
                <BaseButton @click="signin" v-if="!store.signin_state">{{ $t('message.account.login') }}</BaseButton>
                <BaseButton @click="signout" v-if="store.signin_state">{{ $t('message.account.logout') }}</BaseButton>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import router from '@/router'
import { ref, onMounted } from 'vue'
import { useAccountStore } from '@/stores/account'
import BaseButton from '../../common/button/BaseButton.vue'
import supabase from '@/services/supabase'
import { SIGNIN_PATH } from '@/router/constants'

const show = ref<boolean>(false);
const store = useAccountStore()

onMounted(()=>{
    window.addEventListener("click", (event) => {
        if (show.value) {
            if (event.target.id != "change-account-icon"
            && event.target.id != "change-account-div"
            && event.target.id != "change-account-label"
            && event.target.id != "change-account-select") {
                show.value = false;
            }
        }
    });
})

async function signout() {
    const { error } = await supabase.auth.signOut()
    store.signout()
    router.push(SIGNIN_PATH)
}

function signin() {
    router.push(SIGNIN_PATH)
}
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
