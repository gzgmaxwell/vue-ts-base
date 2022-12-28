import '../styles/landscape.less'
import { useCommonStore } from '@/stores'
/*
  自适应横屏模式
  通过css将body旋转，达到兼容
*/

export default class AutoLandscape {
  private static bindAutoLandscape() {
    const { changeLandscape } = useCommonStore()

    const screenDirction = window.matchMedia('(min-aspect-ratio: 13/9)')
    if (screenDirction.matches) {
      document.documentElement.classList.add('landscape')
      changeLandscape(true)
    } else {
      document.documentElement.classList.remove('landscape')
      changeLandscape(false)
    }
  }

  private static debounce = (fn: Function, delay: number) => {
    let timer: number = 0
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(fn, delay)
    }
  }

  static load() {
    window.addEventListener(
      'resize',
      AutoLandscape.debounce(AutoLandscape.bindAutoLandscape, 10)
    )
  }
}
