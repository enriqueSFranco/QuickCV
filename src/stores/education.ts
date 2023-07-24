import { watch } from 'vue'
import { defineStore } from 'pinia'
import { STORE_NAME, type Education, type Id } from '@/shared/types.d'

const getDefaultSettings = (): Education[] => ([{
  id: crypto.randomUUID(),
  school: '',
  degree: '',
  dateInit: '',
  dateEnd: ''
}])

const getSettings = (): Education[] => {
  const stored = window.localStorage.getItem(STORE_NAME.EDUCATION)
  if (stored != null) return JSON.parse(stored)
  return getDefaultSettings()
}

export const useEducation = defineStore(STORE_NAME.EDUCATION, {
  state: () => ({ formData: getSettings() }),
  getters: {
    hasMultipleForms (state) {
      const { formData } = state
      const { length } = formData
      return length > 1
    }
  },
  actions: {
    createForm () {
      const newForm: Education = {
        id: crypto.randomUUID(),
        school: '',
        degree: '',
        dateInit: '',
        dateEnd: ''
      }
      this.formData.push(newForm)
    },
    deleteForm (formId: Id) {
      console.log('delete')
      const forms = this.formData
      const newForms = forms.filter(form => form.id !== formId)
      this.formData = newForms
      window.localStorage.setItem(STORE_NAME.EDUCATION, JSON.stringify(this.formData))
    },
    updateForm () {
      watch(this.formData, state => {
        window.localStorage.setItem(STORE_NAME.EDUCATION, JSON.stringify(state))
      })
    }
  }
})
