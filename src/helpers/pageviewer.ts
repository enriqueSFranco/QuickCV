import type { ProfessionalProfile, PersonalInformation, Website } from '@/shared/types.d'

interface Data {
  personalInformation: PersonalInformation
  websites: Website[]
  professionalProfile: ProfessionalProfile
}

interface Props {
  text: Data
}

export function pageviewer (data: Props): void {
  // Prepare canvas using PDF page dimensions
  const canvas = window.document.getElementById('the-canvas')
  if (canvas instanceof HTMLCanvasElement) {
    const context = canvas.getContext('2d')
    if (context != null) {
      context.font = '20px Arial'
      context.fillStyle = '#fff'
      const mainText = data.text.personalInformation.email
      const mainTextWidth = context.measureText(mainText).width
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.fillText(`${data.text.personalInformation.name} ${data.text.personalInformation.lastName}`, 10, 16)
      context.fillText(data.text.personalInformation.job, 10, 40)
      context.fillText(data.text.personalInformation.email, 10, 64)
      context.fillText(data.text.professionalProfile.summary, 10, 88)

      // FORMAS DE CONTACTO
      const websites = data.text.websites
      const y = 64 // posicion del email en el eje y
      const lineHeight = 20 // espacio entre las lineas
      let currentY = y
      websites.forEach(website => {
        const url = website.url
        const positionX = mainTextWidth + 20
        context.fillText(website.url, 350, 64)
        context.fillText(url, positionX, currentY)
        currentY += lineHeight
      })
    }
  }
}
