export const usePx2viewport = (px, type = 'vw') => {
  if (/%/gi.test(px)) {
    return px
  }
  return `${parseFloat(px) / 7.5}${type}`
}
