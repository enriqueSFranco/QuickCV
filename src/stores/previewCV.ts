import { watch, type Ref, ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import debounce from 'just-debounce-it'
import { STORE_NAME } from '@/shared/types.d'
import { useEducation, useExperience, usePersonalInformation, useProfessinalProfile, useWebsite } from '@/stores'
import { pageviewer, download } from '@/helpers'

const DEFAULT_URL = './default.pdf'

export const usePreviewCurriculum = defineStore(STORE_NAME.PREVIEW_CURRICULUM, () => {
  const personalInformation = usePersonalInformation()
  const websites = useWebsite()
  const professionalProfile = useProfessinalProfile()
  const education = useEducation()
  const experience = useExperience()
  const data = reactive({
    personalInformation: personalInformation.formData,
    websites: websites.formData,
    professionalProfile: professionalProfile.formData,
    education: education.formData,
    experience: experience.formData
  })
  const loading: Ref<boolean> = ref(true)
  const pdfFile: Ref<string | null> = ref(null)

  async function renderPDF (): Promise<void> {
    try {
      loading.value = true
      const response = await fetch(DEFAULT_URL)
      pdfFile.value = await response.text()
      pageviewer(pdfFile.value, data, () => { loading.value = false })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.name)
      }
    }
  }

  const dowloadPDF = (): void => { download({ curriculumData: data }) }

  const debounceRenderPDF = debounce(renderPDF, 2000)

  watch([data.personalInformation, data.websites, data.professionalProfile, data.education, data.experience], () => { debounceRenderPDF(); console.log('hay cambios') })

  return { loading, debounceRenderPDF, dowloadPDF }
})
