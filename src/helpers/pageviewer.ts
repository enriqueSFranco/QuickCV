import type { ProfessionalProfile, PersonalInformation } from '@/shared/types.d'

interface Data {
  personalInformation: PersonalInformation
  professionalProfile: ProfessionalProfile
}

interface Props {
  text: Data
}

export function pageviewer (data: Props): void {
  console.log('page loaded')
  // Prepare canvas using PDF page dimensions
  const canvas = window.document.getElementById('the-canvas')
  if (canvas instanceof HTMLCanvasElement) {
    const context = canvas.getContext('2d')
    if (context != null) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.font = '16px Arial'
      context.fillStyle = '#fff'
      context.fillText(`${data.text.personalInformation.name} ${data.text.personalInformation.lastName}`, 10, 16)
      context.fillText(data.text.personalInformation.job, 10, 40)
      context.fillText(data.text.personalInformation.email, 10, 64)
      context.fillText(data.text.professionalProfile.summary, 10, 88)
    }
  }
}
