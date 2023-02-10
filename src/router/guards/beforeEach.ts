import type { RouteLocationNormalized, Router } from 'vue-router'
import { useAppStore } from '@/stores/app'

/**
 * 前置路由守卫
 */
export default class BeforeEachGuard {
  /**
   * 加载前置路由守卫
   * @param router 路由实例
   */
  public static load(router: Router) {
    router.beforeEach(to => {
      BeforeEachGuard.recordRouteNameStack(to)
    })
  }

  /**
   * 记录路由栈名，以供`AppRouterView`使用
   * @param to 去往路由
   */
  public static recordRouteNameStack(to: RouteLocationNormalized) {
    if (to.name !== undefined) {
      const appStore = useAppStore()
      const tempRouteNameStack = [...appStore.routeNameStack]
      const IS_ROUTE_STACK_EMPTY = tempRouteNameStack.length === 0

      if (IS_ROUTE_STACK_EMPTY) {
        tempRouteNameStack.push(to.name as string)
      } else {
        const NEW_PAGE_IN_ROUTE_STACK_POSITION = tempRouteNameStack.indexOf(
          to.name as string
        )
        const IS_NEW_ROUTE = NEW_PAGE_IN_ROUTE_STACK_POSITION === -1

        if (IS_NEW_ROUTE) {
          tempRouteNameStack.push(to.name as string)
        } else {
          tempRouteNameStack.splice(
            NEW_PAGE_IN_ROUTE_STACK_POSITION + 1,
            tempRouteNameStack.length - NEW_PAGE_IN_ROUTE_STACK_POSITION + 1
          )
        }
      }

      appStore.routeNameStack = tempRouteNameStack
    }
  }
}
