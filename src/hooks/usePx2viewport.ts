export const usePx2viewport = (px: string, type = 'vw') => {
  if (/%/gi.test(px)) {
    return px
  }
  return `${parseFloat(px) / 7.5}${type}`
}
