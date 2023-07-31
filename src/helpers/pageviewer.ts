import { renderEducation, renderPersonalInformation, renderProfessionalProfile } from '@/helpers/render-cv-sections'
import type {
  ProfessionalProfile,
  PersonalInformation,
  Website,
  Education
} from '@/shared/types.d'
import { FONTS, CONFIG_CANVAS } from '@/shared/constants.d'
import { drawText, pdfjs } from '@/helpers'

interface Data {
  personalInformation: PersonalInformation
  websites: Website[]
  professionalProfile: ProfessionalProfile
  education: Education[]
}

const { COORDINATES, SIZE } = CONFIG_CANVAS

export function pageviewer (pdfUrl: string, data: Data, onRender: () => void): void {
  const { personalInformation, websites, professionalProfile, education } = data
  const scale = SIZE.SCALE
  const pdfFile = pdfjs.getDocument({ data: pdfUrl })

  void pdfFile.promise.then((pdf) => {
    // render page
    void pdf.getPage(SIZE.PAGE_TO_VIEW).then(page => {
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
          // canvas.style.height = `${Math.floor(viewport.height)}px`

          const renderContext = {
            canvasContext: context,
            viewport
          }

          const renderTask = page.render(renderContext)
          void renderTask.promise.then(() => {
            context.fillStyle = '#000' // Color del texto
            let lineHeight: number = 0

            //  INFORMACION PERSONAL
            lineHeight += renderPersonalInformation({ ctx: context, personalInformation, currentLineHeght: lineHeight })

            // EDUCACIÓN
            lineHeight += 150
            lineHeight += drawText({ ctx: context, font: FONTS.fontTitle, text: 'Educación', x: COORDINATES.x, y: lineHeight })
            lineHeight = renderEducation({ ctx: context, education, currentLineHeght: lineHeight })
            console.log(lineHeight)

            // PERFILL PROFESIONAL
            lineHeight += 35
            drawText({
              ctx: context,
              text: 'Perfil Profesional',
              font: FONTS.fontTitle,
              x: COORDINATES.x,
              y: lineHeight
            })
            lineHeight += renderProfessionalProfile({ canvasElement: canvas, ctx: context, professionalProfile, currentLineHeght: lineHeight })

            // cargar despues de 2s
            setTimeout(() => { onRender() }, 2000)
          })
          // void renderTask.promise.then(() => {
          //   context.fillStyle = '#000' // Color del texto
          //   let lineHeightPersonalIfo = 0

          //   // INFORMACION PERSONAL
          //   lineHeightPersonalIfo = renderPersonalInformation({ ctx: context, personalInformation })

          //   // WEBSITES
          //   const initialY = 120 // posición del elemento email en el ejeY en el canva
          //   let posX = calculateWidthTetx({ ctx: context, txt: personalInformation.email }) // ancho del texto email
          //   for (const website of websites) {
          //     const { url } = website
          //     const urlWitdth = calculateWidthTetx({ ctx: context, txt: url }) // ancho de cada url
          //     drawText({
          //       ctx: context,
          //       text: url,
          //       font: '26px Arial',
          //       x: posX + 40,
          //       y: initialY
          //     })
          //     posX += urlWitdth + 30
          //   }
          //   let height = lineHeightPersonalIfo + 150 // ancho del header

          //   // EDUCACIÓN
          //   const educationTitleHeight = drawText({ ctx: context, font: FONTS.fontTitle, text: 'Educación', x: COORDINATES.x, y: height })
          //   let lineHeight = height + educationTitleHeight + 20
          //   for (const it of education) {
          //     const { school, degree, dateInit, dateEnd } = it
          //     const schoolHeight = drawText({
          //       ctx: context,
          //       font: FONTS.fontText,
          //       colorText: '#6a7c97',
          //       text: `${school}`,
          //       x: COORDINATES.x,
          //       y: lineHeight
          //     })
          //     const degreeHeight = drawText({
          //       ctx: context,
          //       font: 'italic 26px Arial',
          //       text: `${degree} | ${dateInit} - ${dateEnd}`,
          //       x: COORDINATES.x,
          //       y: lineHeight + 35
          //     })
          //     lineHeight += schoolHeight + degreeHeight + 35
          //   }

          //   height = lineHeight + 35
          //   // PERFIL PROFESIONAL
          //   const professionalProfileHeight = drawText({ ctx: context, font: FONTS.fontTitle, text: 'Perfil Profesional', x: COORDINATES.x, y: height })
          //   const lines = splitTextIntoLines({ ctx: context, txt: professionalProfile.summary, maxWidth: canvas.width + 140 })
          //   let professionalProfilePosY = height + 40
          //   // let lineHeightCurrent = context.measureText(lines[0]).width
          //   for (let i = 0; i < lines.length; i++) {
          //     const currentLine = lines[i]
          //     drawText({
          //       ctx: context,
          //       font: FONTS.fontText,
          //       text: `${currentLine}`,
          //       x: COORDINATES.x,
          //       y: professionalProfilePosY
          //     })
          //     professionalProfilePosY += 40
          //   }
          //   height = professionalProfileHeight + professionalProfilePosY

          //   // EXPERIENCIA
          //   const experienceHeight = drawText({
          //     ctx: context,
          //     font: FONTS.fontTitle,
          //     text: 'Experiencia Laboral',
          //     x: COORDINATES.x,
          //     y: height
          //   })

          //   // HABILIDADES
          //   height += experienceHeight + 35
          //   drawText({
          //     ctx: context,
          //     font: FONTS.fontTitle,
          //     text: 'Habilidades',
          //     x: COORDINATES.x,
          //     y: height
          //   })
          //   renderPage = false
          // }).catch(error => {
          //   if (error instanceof Error) {
          //     console.log(error.message)
          //   }
          // })
        }
      }
    })
  })
}
