import type { ProfessionalProfile, PersonalInformation, Website, Education } from '@/shared/types.d'
import { drawText, splitTextIntoLines, calculateWidthTetx } from './drawText'
import { pdfjs } from './pdfjs'

interface Data {
  personalInformation: PersonalInformation
  websites: Website[]
  professionalProfile: ProfessionalProfile
  education: Education[]
}

function renderHeader ({ ctx }: { ctx: CanvasRenderingContext2D }): void {
  // implemntar la función para renderizar el header del cv
}

export function pageviewer (pdfUrl: string, data: Data, onRender): void {
  const { personalInformation, websites, professionalProfile, education } = data
  const scale = 0.8
  const pdfFile = pdfjs.getDocument({ data: pdfUrl })
  void pdfFile.promise.then((pdf) => {
    void pdf.getPage(1).then(page => {
      const viewport = page.getViewport({ scale })
      const outputScale = window.devicePixelRatio ?? 1

      // preparando el canvas
      const canvas = document.getElementById('the-canvas')
      if (canvas instanceof HTMLCanvasElement) {
        const context = canvas.getContext('2d')
        if (context != null) {
          canvas.width = Math.floor(viewport.width * outputScale)
          canvas.height = Math.floor(viewport.height * outputScale)
          canvas.style.width = `${Math.floor(viewport.width)}px`
          canvas.style.height = `${Math.floor(viewport.height)}px`

          const renderContext = {
            canvasContext: context,
            viewport
          }
          void page.render(renderContext).promise.then(() => {
            // TODO: falta implementar el loading
            // CONSTANTES
            context.fillStyle = '#000' // Color del texto
            const x = 20 // posición inicial en el ejeX de los elementos dentro del canva
            const fontTitle = 'bold 30px Arial'

            // INFORMACION PERSONAL
            const fullnameHeight = drawText({ ctx: context, font: fontTitle, text: `${personalInformation.name} ${personalInformation.lastName}`, x: 20, y: 50 })
            const jobHeight = drawText({ ctx: context, font: 'bold 26px Arial', text: `${personalInformation.job}`, colorText: '#6a7c97', x, y: 85 })
            const emailHeight = drawText({ ctx: context, font: '26px Arial', text: `${personalInformation.email}`, x, y: 120 })

            // WEBSITES
            const initialY = 120 // posición del elemento email en el ejeY en el canva
            let posX = calculateWidthTetx({ ctx: context, txt: personalInformation.email }) // ancho del texto email
            for (const website of websites) {
              const { url } = website
              const urlWitdth = calculateWidthTetx({ ctx: context, txt: url }) // ancho de cada url
              drawText({
                ctx: context,
                text: url,
                font: '26px Arial',
                x: posX + 40,
                y: initialY
              })
              posX += urlWitdth + 30
            }
            let height = fullnameHeight + jobHeight + emailHeight + 150 // ancho del header

            // EDUCACIÓN
            const educationTitleHeight = drawText({ ctx: context, font: fontTitle, text: 'Educación', x, y: height })
            let lineHeight = height + educationTitleHeight + 20
            for (const it of education) {
              const { school, degree, dateInit, dateEnd } = it
              // const schoolHeight = calculateWidthTetx({ ctx: context, txt: school })
              // const degreeHeight = calculateWidthTetx({ ctx: context, txt: degree })
              // const totalLineHeght = schoolHeight + degreeHeight
              const schoolHeight = drawText({
                ctx: context,
                font: '26px Arial',
                colorText: '#6a7c97',
                text: `${school}`,
                x,
                y: lineHeight
              })
              const degreeHeight = drawText({
                ctx: context,
                font: 'italic 26px Arial',
                text: `${degree} | ${dateInit} - ${dateEnd}`,
                x,
                y: lineHeight + 35
              })
              lineHeight += schoolHeight + degreeHeight + 35
            }

            height = lineHeight + 35
            // PERFIL PROFESIONAL
            drawText({ ctx: context, font: fontTitle, text: 'Perfil Profesional', x, y: height })
            const lines = splitTextIntoLines({ ctx: context, txt: professionalProfile.summary, maxWidth: canvas.width + 140 })
            let professionalProfilePosY = height + 40
            // let lineHeightCurrent = context.measureText(lines[0]).width
            for (let i = 0; i < lines.length; i++) {
              const currentLine = lines[i]
              drawText({
                ctx: context,
                font: '26px Arial',
                text: `${currentLine}`,
                x,
                y: professionalProfilePosY
              })
              professionalProfilePosY += 40
            }
          })
        }
      }
    })
  })
}
