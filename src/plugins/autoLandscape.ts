import '@/styles/landscape/index.less'
import { useAppStore } from '@/stores'
import { useDebounce } from '@/hooks'
/*
  自适应横屏模式
  通过css将body旋转，达到兼容
*/

export default class NoRotationPlugin {
  private static bind() {
    const { changeLandscape } = useAppStore()

    const screenDirction = window.matchMedia('(min-aspect-ratio: 13/9)')
    if (screenDirction.matches) {
      document.documentElement.classList.add('landscape')
      changeLandscape(true)
    } else {
      document.documentElement.classList.remove('landscape')
      changeLandscape(false)
    }
  }

  static load() {
    window.addEventListener('resize', useDebounce(NoRotationPlugin.bind, 10))
  }
}
