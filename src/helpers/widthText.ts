export function calculateWidthTetx ({ ctx, txt }: { ctx: CanvasRenderingContext2D, txt: string }): number {
  return ctx.measureText(txt).width
}
