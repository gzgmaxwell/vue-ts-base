import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

/**
 * 退出登陆
 */
export const useLogOut = () => {
  const { clearToken } = useUserStore()
  const router = useRouter()

  clearToken()
  router.replace('/')
}
