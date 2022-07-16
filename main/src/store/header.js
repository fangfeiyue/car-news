import { ref } from 'vue'

export const headerStatus = ref(true)

export function changeHeader(val) {
  headerStatus.value = val
}