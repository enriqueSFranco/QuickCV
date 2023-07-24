import { watch, type Ref, ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { STORE_NAME } from '@/shared/types.d'
import { usePersonalInformation, useProfessinalProfile, useWebsite } from '.'
import { pageviewer } from '@/helpers/pageviewer'

export const usePreviewCurriculum = defineStore(STORE_NAME.PREVIEW_CURRICULUM, () => {
  const personalInformation = usePersonalInformation()
  const websites = useWebsite()
  const professionalProfile = useProfessinalProfile()
  const data = reactive({
    personalInformation: personalInformation.formData,
    websites: websites.formData,
    professionalProfile: professionalProfile.formData
  })
  const loading: Ref<boolean> = ref(true)
  const pdfFile: Ref<string | null> = ref(null)

  watch(personalInformation, () => {
    console.log('cambio en la informacion')
  }, { deep: true })

  async function renderPDF (): Promise<void> {
    loading.value = true
    const response = await fetch('./default.pdf')
    pdfFile.value = await response.text()
    pageviewer(pdfFile.value, data, () => { loading.value = false })
  }

  return { loading, renderPDF }
})
