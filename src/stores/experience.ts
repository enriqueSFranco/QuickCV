import { watch } from 'vue'
import { defineStore } from 'pinia'
import { STORE_NAME, type Experience, type Id } from '@/shared/types.d'

const defaultSettings = (): Experience[] => ([{
  id: crypto.randomUUID(),
  company: '',
  job: '',
  dateInit: '',
  dateEnd: '',
  details: ''
}])

const getSettings = (): Experience[] => {
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
      const newForm: Experience = {
        id: crypto.randomUUID(),
        company: '',
        job: '',
        dateInit: '',
        dateEnd: '',
        details: ''
      }
      this.formData.push(newForm)
    },
    deleteForm (formId: Id) {
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
