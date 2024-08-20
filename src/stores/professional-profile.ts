import { watch } from 'vue'
import { defineStore } from 'pinia'
import { type ProfileCv } from '@/shared/models.d'
import { STORE_NAME } from '@/shared/enums.d'

const getDefaultSettings = (): ProfileCv => ({ summary: '' })

const getSettings = (): ProfileCv => {
  const stored = window.localStorage.getItem(STORE_NAME.PROFILE)
  if (stored != null) return JSON.parse(stored)
  return getDefaultSettings()
}

export const useProfessinalProfile = defineStore(STORE_NAME.PROFILE, {
  state: () => ({ formData: getSettings() }),
  getters: {
    isComplete (state) {
      const field = state.formData.summary
      return field.trim()
    }
  },
  actions: {
    updateForm ({ summary }: ProfileCv) {
      this.formData = {
        ...this.formData,
        summary
      }
      watch(this.formData, (state) => {
        window.localStorage.setItem(STORE_NAME.PROFILE, JSON.stringify(state))
      }, { deep: true })
    }
  }
})
