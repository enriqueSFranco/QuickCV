import { watch } from 'vue'
import { defineStore } from 'pinia'
import { type ProfessionalProfile, STORE_NAME } from '@/shared/types.d'

const getDefaultSettings = (): ProfessionalProfile => ({ summary: '' })

const getSettings = (): ProfessionalProfile => {
  const stored = window.localStorage.getItem(STORE_NAME.PROFESSIONAL_PROFILE)
  if (stored != null) return JSON.parse(stored)
  return getDefaultSettings()
}

export const useProfessinalProfile = defineStore(STORE_NAME.PROFESSIONAL_PROFILE, {
  state: () => ({ formData: getSettings() }),
  actions: {
    updateForm ({ summary }: ProfessionalProfile) {
      this.formData = {
        ...this.formData,
        summary
      }
      watch(this.formData, (state) => {
        window.localStorage.setItem(STORE_NAME.PROFESSIONAL_PROFILE, JSON.stringify(state))
      }, { deep: true })
    }
  }
})
