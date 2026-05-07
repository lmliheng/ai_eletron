import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', () => {
  const message = ref('')

  function setMessage(msg) {
    message.value = msg
  }

  const output = ref('')

  function setOutput(msg) {
    output.value = msg
  }

  return { message, setMessage, output, setOutput }
},{
  persist: true,
})
