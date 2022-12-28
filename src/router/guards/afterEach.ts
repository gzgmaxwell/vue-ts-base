import type { Router } from 'vue-router'

/**
 * 后置路由守卫
 */
export default class AfterEachGuard {
  /**
   * 加载后置路由守卫
   * @param router 路由实例
   */
  public static load(router: Router) {
    router.afterEach((to, from) => {
      const toLevel = to.path.split('/').filter(v => !!v).length
      const fromLevel = from.path.split('/').filter(v => !!v).length
      let transition: string = ''

      if (!toLevel && !fromLevel) {
        // 是否是一级页面
        transition = ''
      } else if (toLevel === fromLevel) {
        // 同级页面
        transition = ''
      } else if (toLevel > fromLevel) {
        // 进入动画
        transition = 'page-left'
      } else if (toLevel < fromLevel) {
        // 退出动画
        transition = 'page-right'
      }
      to.meta.transition = transition
    })
  }
}
