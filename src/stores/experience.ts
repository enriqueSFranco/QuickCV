import { watch } from 'vue'
import { defineStore } from 'pinia'
import { type ExperienceCv } from '@/shared/models'
import { STORE_NAME } from '@/shared/enums.d'

const defaultSettings = (): ExperienceCv[] => ([{
  id: 1,
  company: '',
  job: '',
  dateInit: '',
  dateEnd: '',
  summary: ''
}])

const getSettings = (): ExperienceCv[] => {
  const store = window.localStorage.getItem(STORE_NAME.EXPERIENCE)
  if (store != null) return JSON.parse(store)
  return defaultSettings()
}

export const useExperience = defineStore(STORE_NAME.EXPERIENCE, {
  state: () => ({ formData: getSettings() }),
  getters: {
    hasMultipleForms (state) {
      const forms = state.formData
      return forms.length > 1
    }
  },
  actions: {
    createForm () {
      const newForm: ExperienceCv = {
        id: 1,
        company: '',
        job: '',
        dateInit: '',
        dateEnd: '',
        details: ''
      }
      this.formData.push(newForm)
    },
    deleteForm (formId: number) {
      const forms = this.formData
      const newForms = forms.filter(form => form.id !== formId)
      this.formData = newForms
      window.localStorage.setItem(STORE_NAME.EXPERIENCE, JSON.stringify(this.formData))
    },
    updateForm () {
      watch(this.formData, state => {
        window.localStorage.setItem(STORE_NAME.EDUCATION, JSON.stringify(state))
      })
    }
  }
})
