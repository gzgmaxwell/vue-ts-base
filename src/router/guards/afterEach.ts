import type { Router } from 'vue-router'
import { useAppStore } from '@/stores/app'

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
      const { routeNameStack } = useAppStore()
      let transition: string = ''

      if (routeNameStack.includes(from.name as string)) {
        transition = 'page-left'
      } else {
        transition = 'page-right'
      }
      to.meta.transition = transition
    })
  }
}
