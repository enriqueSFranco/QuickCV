import { type SplitTextIntoLinesProps } from '@/shared/types.d'

/**
 * Divide un texto en líneas para que se ajuste a un ancho máximo en un contexto 2D de lienzo (CanvasRenderingContext2D).
 * @param {SplitTextIntoLinesProps} props - Propiedades para dividir el texto en líneas.
 * @returns {string[]} Un arreglo de líneas resultante después de dividir el texto.
 */
export function splitTextIntoLines ({ ctx, txt, maxWidth }: SplitTextIntoLinesProps): string[] {
  const words = txt.split(' ')
  let currentLine = words[0]
  const lines = []

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    const currentLineWidth = ctx.measureText(currentLine + ' ' + word).width
    if (currentLineWidth < maxWidth) {
      currentLine += ' ' + word
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  }
  lines.push(currentLine)

  return lines
}
