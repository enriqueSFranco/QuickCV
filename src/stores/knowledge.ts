import { watch } from 'vue'
import { defineStore } from 'pinia'
import { type KnowledgeCv } from '@/shared/models.d'
import { STORE_NAME } from '@/shared/enums.d'

const getDefaultSettings = (): KnowledgeCv[] => ([{
  id: 1,
  skill: ''
}])

const getSettings = (): KnowledgeCv[] => {
  const store = window.localStorage.getItem(STORE_NAME.Knowledge)
  if (store != null) return JSON.parse(store)
  return getDefaultSettings()
}

export const useSkills = defineStore(STORE_NAME.Knowledge, {
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
      const newSkill: KnowledgeCv = {
        id: 1,
        skill: ''
      }
      const skills = this.formData
      skills.push(newSkill)
    },
    deleteSkill (id: KnowledgeCv['id']) {
      const skills = this.formData
      const newSkills = skills.filter(skill => skill.id !== id)
      this.formData = newSkills
    },
    updateForm () {
      watch(this.formData, (state) => {
        window.localStorage.setItem(STORE_NAME.Knowledge, JSON.stringify(state))
      })
    }
  }
})
