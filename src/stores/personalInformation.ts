import { watch } from 'vue'
import { defineStore } from 'pinia'
import { STORE_NAME, type PersonalInformation } from '@/shared/types.d'

const getDefaultSettings = (): PersonalInformation => ({
  name: '',
  lastName: '',
  job: '',
  email: ''
})

const getSettings = (): PersonalInformation => {
  const stored = window.localStorage.getItem(STORE_NAME.PERSONAL_INFORMATION)
  if (stored != null) {
    return JSON.parse(stored)
  }
  return getDefaultSettings()
}

export const usePersonalInformation = defineStore(STORE_NAME.PERSONAL_INFORMATION, {
  state: () => ({ formData: getSettings() }),
  getters: {
    isComplete (state): boolean {
      const fields = Object.values(state.formData)
      const checkCompleteToFields = fields.some(field => field.trim() === '')
      // true -> si hay campos vacios
      // false -> si todos los campos estan completos
      return checkCompleteToFields
    }
  },
  actions: {
    updateForm ({ name, lastName, job, email }: PersonalInformation) {
      this.formData = {
        ...this.formData,
        ...{ name, lastName, job, email }
      }
      watch(this.formData, state => {
        window.localStorage.setItem(STORE_NAME.PERSONAL_INFORMATION, JSON.stringify(state))
      }, { deep: true })
    }
  }
})
