import { defineStore } from 'pinia'
import { PersonalInformationSchema } from '@/schemas'
import { STORE_NAME, type PersonalInfo } from '@/shared/types.d'

const getDefaultSettings = (): PersonalInfo => ({
  name: '',
  lastName: '',
  job: '',
  email: ''
})

const getSettings = (): PersonalInfo => {
  const stored = window.localStorage.getItem(STORE_NAME.PERSONAL_INFORMATION)
  if (stored != null) return JSON.parse(stored)
  return getDefaultSettings()
}

export const usePersonalInfoStore = defineStore(STORE_NAME.PERSONAL_INFORMATION, {
  state: () => ({ formData: getSettings() }),
  getters: {
    isComplete (state): boolean {
      const fields = Object.values(state.formData)
      const checkCompleteToFields = fields.some(field => field.trim() === '')
      return checkCompleteToFields
    }
  },
  actions: {
    updateForm (formData: PersonalInfo) {
      const { name, lastName, job, email } = formData
      const result = PersonalInformationSchema.safeParse({ name, lastName, job, email })

      if (!result.success) {
        console.error(result.error)
        return
      }

      this.formData = {
        ...this.formData,
        ...{ name, lastName, job, email }
      }
      window.localStorage.setItem(STORE_NAME.PERSONAL_INFORMATION, JSON.stringify(this.formData))
    }
  }
})
