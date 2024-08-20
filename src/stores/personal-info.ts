import { defineStore } from 'pinia'
import { PersonalInformationSchema } from '@/schemas'
import { type HeaderCv } from '@/shared/models.d'
import { STORE_NAME } from '@/shared/enums.d'

const getDefaultSettings = (): HeaderCv => ({
  name: '',
  lastname: '',
  fullname: '',
  job: '',
  socialNetworks: [],
  summary: '',
  phone: ''
})

const getSettings = (): HeaderCv => {
  const stored = window.localStorage.getItem(STORE_NAME.HEADER)
  if (stored != null) return JSON.parse(stored)
  return getDefaultSettings()
}

export const usePersonalInfo = defineStore(STORE_NAME.HEADER, {
  state: () => ({ formData: getSettings() }),
  getters: {
    isComplete (state): boolean {
      const fields = Object.values(state.formData)
      const checkCompleteToFields = fields.some(field => field.trim() === '')
      return checkCompleteToFields
    }
  },
  actions: {
    updateForm (formData: HeaderCv) {
      const { name, lastname, fullname, job, socialNetworks } = formData
      const result = PersonalInformationSchema.safeParse({ name, lastname, job, socialNetworks })

      if (!result.success) {
        console.error(result.error)
        return
      }

      this.formData = {
        ...this.formData,
        ...{ name, lastname, job, socialNetworks }
      }
      window.localStorage.setItem(STORE_NAME.HEADER, JSON.stringify(this.formData))
    }
  }
})
