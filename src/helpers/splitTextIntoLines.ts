export function splitTextIntoLines ({ ctx, txt, maxWidth }: { ctx: CanvasRenderingContext2D, txt: string, maxWidth: number }): string[] {
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
