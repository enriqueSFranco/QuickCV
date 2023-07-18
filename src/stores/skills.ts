import { defineStore } from 'pinia'
import { STORE_NAME, type Skill } from '@/shared/types.d'

const getDefaultSettings = (): Skill[] => ([{
  id: crypto.randomUUID(),
  skill: ''
}])

const getSettings = (): Skill[] => {
  const store = window.localStorage.getItem(STORE_NAME.SKILLS)
  if (store != null) return JSON.parse(store)
  return getDefaultSettings()
}

export const useSkills = defineStore(STORE_NAME.SKILLS, {
  state: () => ({ formData: getSettings() }),
  getters: {
    hasMultipleForms (state) {
      const data = state.formData
      const { length } = data
      return length > 1
    }
  },
  actions: {
    createSkill () {

    }
  }
})
