/*
  自适应屏幕模式
  自动设置根元素fontsize大小
  始终保持1rem = 16px
*/
export default class AutoSetRootRem {
  private static debounce(fn: Function, delay: number) {
    let timer: number = 0
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(fn, delay)
    }
  }

  private static bindAutoSetRootRem() {
    const doc = document.documentElement
    let width = doc.clientWidth

    // 是否启用横屏兼容
    const screenDirction = window.matchMedia('(min-aspect-ratio: 13/9)')
    if (screenDirction.matches) {
      width = doc.clientHeight
    }

    const size = 16 * (width / 375)
    doc.style.fontSize = `${size}px`
  }

  static load() {
    window.addEventListener(
      'resize',
      AutoSetRootRem.debounce(AutoSetRootRem.bindAutoSetRootRem, 100),
      false
    )
  }
}
