import { watch } from 'vue'
import { defineStore } from 'pinia'
import { STORE_NAME, type Website } from '@/shared/types.d'

const getDefaultSettings = (): Website[] => ([{
  id: crypto.randomUUID(),
  url: ''
}])

const getSettings = (): Website[] => {
  const stored = window.localStorage.getItem(STORE_NAME.WEBSITE)
  if (stored != null) return JSON.parse(stored)
  return getDefaultSettings()
}

export const useWebsite = defineStore(STORE_NAME.WEBSITE, {
  state: () => ({
    formData: getSettings()
  }),
  getters: {
    hasMultipleWebsites: (state) => state.formData.length > 1
  },
  actions: {
    updated () {
      watch(this.formData, state => {
        window.localStorage.setItem(STORE_NAME.WEBSITE, JSON.stringify(state))
      }, { deep: true })
    },
    createWebsite () {
      const newWebsite: Website = {
        id: crypto.randomUUID(),
        url: ''
      }
      this.formData.push(newWebsite)
    },
    deleteWebsite ({ id }: { id: string }) {
      const websites = this.formData
      const newWebsites = websites.filter(website => website.id !== id)
      this.formData = newWebsites
      window.localStorage.setItem(STORE_NAME.WEBSITE, JSON.stringify(this.formData))
    }
  }
})
