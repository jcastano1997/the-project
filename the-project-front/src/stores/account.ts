import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LOCAL_KEY_SESSION } from '@/assets/constants'

export const useAccountStore = defineStore('account', () => {
  const signin_state = ref(false)
  const session_token = ref("")

  const session_token_localstore = localStorage.getItem(LOCAL_KEY_SESSION)
  if (session_token_localstore != null) {
    session_token.value = session_token_localstore
    signin_state.value = true
  }

  function signin(jwt_token_received: string) {
    session_token.value = jwt_token_received
    signin_state.value = true
    localStorage.setItem(LOCAL_KEY_SESSION, jwt_token_received)
  }

  function signout() {
    session_token.value = ""
    signin_state.value = false
    localStorage.removeItem(LOCAL_KEY_SESSION)
  }

  return { signin_state, session_token, signin, signout }
})
