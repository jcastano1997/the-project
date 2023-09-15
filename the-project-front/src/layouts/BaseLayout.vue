<script setup lang="ts">
import TopBar from '../components/common/TopBar.vue'
import PopupMessage from '../components/common/PopupMessage.vue'
import { ref, onMounted } from 'vue'

const is_error = ref(false)
const error_mensage = ref("")

const show_popup_message = ref(false)
const popup_mensage = ref("")
const popup_type = ref("success")

onMounted(() => {
  const queryString = window.location.hash.slice(1)
  const urlParams = new URLSearchParams(queryString)
  const success = urlParams.get('success_description')
  const error = urlParams.get('error_description')
  if (success || error) {
    show_popup_message.value = true
    if (success) {
      popup_mensage.value = success
    } else {
      popup_mensage.value = error ?? ''
      popup_type.value = "warning"
    }
    remove_hash_from_url()
    setTimeout(closePopup, 15000)
  }
})

function closePopup() {
  show_popup_message.value = false
}

function remove_hash_from_url() {
    let uri = window.location.toString();

    if (uri.indexOf("#") > 0) {
        let clean_uri = uri.substring(0,
                        uri.indexOf("#"));

        window.history.replaceState({},
                document.title, clean_uri);
    }
}
</script>

<template>
  <main class="w-full h-full">
    <div class="w-full h-full -mt-4">
      <TopBar/>
      <transition name="fade">
        <PopupMessage v-if="show_popup_message" :message="popup_mensage" :type="popup_type" @callback="closePopup"/>
      </transition>
      <div class="flex justify-center w-full h-full mt-4">
        <div class="my-auto">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
