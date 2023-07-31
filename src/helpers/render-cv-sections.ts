import { drawText, splitTextIntoLines } from '@/helpers'
import { FONTS, CONFIG_CANVAS } from '@/shared/constants.d'
import type {
  RenderPersonalInformationProps,
  RenderEducationProps,
  RenderProfessionalProfileProps
} from '@/shared/types.d'

const { COORDINATES } = CONFIG_CANVAS

/**
 * Renderiza la información personal en un contexto 2D de lienzo (CanvasRenderingContext2D).
 * @param {RenderPersonalInformationProps} props - Propiedades para renderizar la información personal.
 * @returns {number} La altura total ocupada por la información personal en el lienzo.
 */
function renderPersonalInformation ({ ctx, currentLineHeght, personalInformation }: RenderPersonalInformationProps): number {
  const fullnameHeight = drawText({ ctx, font: FONTS.fontTitle, text: `${personalInformation.name} ${personalInformation.lastName}`, x: COORDINATES.x, y: 50 })
  const jobHeight = drawText({ ctx, font: FONTS.fontSubtitle, text: `${personalInformation.job}`, colorText: '#2f2f2f', x: COORDINATES.x, y: fullnameHeight + 55 })
  const emailHeight = drawText({ ctx, font: FONTS.fontText, text: `${personalInformation.email}`, x: COORDINATES.x, y: jobHeight + 95 })
  currentLineHeght += fullnameHeight + jobHeight + emailHeight
  return currentLineHeght
}

/**
 * Renderiza la información educativa en un contexto 2D de lienzo (CanvasRenderingContext2D).
 * @param {RenderEducationProps} props - Propiedades para renderizar la información educativa.
 * @returns {number} La altura total ocupada por la información educativa en el lienzo.
 */
function renderEducation ({ ctx, education, currentLineHeght }: RenderEducationProps): number {
  for (const it of education) {
    const { school, degree, dateInit, dateEnd } = it
    const schoolHeight = drawText({
      ctx,
      font: FONTS.fontText,
      colorText: '#2f2f2f',
      text: `${school}`,
      x: COORDINATES.x,
      y: currentLineHeght + 20
    })
    const degreeHeight = drawText({
      ctx,
      font: 'italic 26px Arial',
      text: `${degree} | ${dateInit} - ${dateEnd}`,
      x: COORDINATES.x,
      y: currentLineHeght + 55
    })
    currentLineHeght += schoolHeight + degreeHeight + 35
  }
  return currentLineHeght
}

/**
 * Renderiza el perfil profesional en un contexto 2D de lienzo (CanvasRenderingContext2D).
 * @param {RenderProfessionalProfileProps} props - Propiedades para renderizar el perfil profesional.
 * @returns {number} La altura total ocupada por el perfil profesional en el lienzo.
 */
function renderProfessionalProfile ({ canvasElement, ctx, professionalProfile, currentLineHeght }: RenderProfessionalProfileProps): number {
  const { summary } = professionalProfile
  const lines = splitTextIntoLines({ ctx, txt: summary, maxWidth: +canvasElement.width + 180 }) // array de strings con el texto del perfil profesional
  let y = currentLineHeght + 40

  for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i]
    drawText({
      ctx,
      font: FONTS.fontText,
      text: currentLine,
      x: COORDINATES.x,
      y
    })
    y += 35
  }
  return currentLineHeght
}

export { renderPersonalInformation, renderEducation, renderProfessionalProfile }
