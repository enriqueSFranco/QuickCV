interface DrawTextProps {
  ctx: CanvasRenderingContext2D
  colorText?: `#${string}`
  text: string
  font: string
  x: number
  y: number
}

export function drawText ({ ctx, text, font, colorText = '#000', x, y }: DrawTextProps): number {
  ctx.font = font
  ctx.fillStyle = colorText
  ctx.fillText(text, x, y)
  return ctx.measureText(text).actualBoundingBoxAscent + ctx.measureText(text).actualBoundingBoxDescent
}
