import { ref } from 'vue'

export const loadingStatus = ref(false)
export const openLoading = () => loadingStatus.value = true
export const closeLoading = () => loadingStatus.value = false
