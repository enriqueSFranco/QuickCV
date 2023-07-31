import { type DrawTextProps } from '@/shared/types.d'

/**
 * Dibuja un texto en un contexto 2D de lienzo (CanvasRenderingContext2D).
 * @param {DrawTextProps} props - Propiedades para dibujar el texto.
 * @returns {number} La altura total del texto dibujado.
 */
export function drawText ({ ctx, text, font, colorText = '#000', x, y }: DrawTextProps): number {
  ctx.font = font // font-family, font-weigth, font-size
  ctx.fillStyle = colorText
  ctx.fillText(text, x, y)

  const metrics = ctx.measureText(text)
  const { actualBoundingBoxAscent, actualBoundingBoxDescent } = metrics

  return actualBoundingBoxAscent + actualBoundingBoxDescent
}
