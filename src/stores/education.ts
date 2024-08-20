import { watch } from 'vue'
import { defineStore } from 'pinia'
import { type EducationCv } from '@/shared/models.d'
import { STORE_NAME } from '@/shared/enums.d'

const getDefaultSettings = (): EducationCv[] => ([{
  id: 1,
  school: '',
  degree: '',
  dateInit: '',
  dateEnd: ''
}])

const getSettings = (): EducationCv[] => {
  const stored = window.localStorage.getItem(STORE_NAME.EDUCATION)
  if (stored != null) return JSON.parse(stored)
  return getDefaultSettings()
}

export const useEducation = defineStore(STORE_NAME.EDUCATION, {
  state: () => ({ formData: getSettings() }),
  getters: {
    hasMultipleForms (state) {
      const { formData } = state
      return formData.length > 1
    },
    isComplete (state): boolean { // TODO: implementar la funcion de verificación
      const { formData } = state
      const ans = formData.every(form => form.school.trim() === '')
      return ans
      // const isEmpty = (value: string): boolean => value.trim() === ''
      // return formData.every(field => isEmpty(field.school) || isEmpty(field.degree) || isEmpty(field.dateInit) || isEmpty(field.dateEnd))
    }
  },
  actions: {
    createForm () {
      const newForm: EducationCv = {
        id: 1,
        school: '',
        degree: '',
        dateInit: '',
        dateEnd: ''
      }
      this.formData.push(newForm)
    },
    deleteForm (formId: string) {
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
