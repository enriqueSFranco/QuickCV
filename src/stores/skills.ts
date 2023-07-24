import { defineStore } from 'pinia'
import { STORE_NAME, type Skill } from '@/shared/types.d'

type SkillId = Pick<Skill, 'id'>

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
      const newSkill: Skill = {
        id: crypto.randomUUID(),
        skill: ''
      }
      const skills = this.formData
      skills.push(newSkill)
    },
    deleteSkill ({ id }: SkillId) {
      let skills = this.formData
      const newSkills = skills.filter(skill => skill.id !== id)
      skills = newSkills
    }
  }
})
