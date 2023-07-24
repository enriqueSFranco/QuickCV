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

export function splitTextIntoLines ({ ctx, txt, maxWidth }: { ctx: CanvasRenderingContext2D, txt: string, maxWidth: number }): string[] {
  // hola soy enrique
  const words = txt.split(' ') // ['hola', 'soy', 'enrique']
  let currentLine = words[0] // ['hola']
  const lines = []

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    const currentLineWidth = ctx.measureText(currentLine + ' ' + word).width
    // si el ancho del texto es menor al maxWidth, entonces seguimos concatenado las palabras
    if (currentLineWidth < maxWidth) {
      currentLine += ' ' + word
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  }
  lines.push(currentLine)
  console.log(lines)
  return lines
}
