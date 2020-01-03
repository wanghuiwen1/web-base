import Layout from '@/layout'

const sysRouter = {
  path: '/sys',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Table',
  meta: {
    title: '系统设置',
    icon: 'system-setting',
    roles: ['admin']
  },
  children: [
    {
      path: '/sys/role',
      component: () => import('@/views/system/role/list'),
      name: 'role',
      meta: { title: '角色管理' }
    },
    {
      path: '/sys/user',
      component: () => import('@/views/system/user/list'),
      name: 'power',
      meta: { title: '用户管理' }
    },
    {
      path: '/sys/white/list',
      component: () => import('@/views/system/whiteList/list'),
      name: 'whiteList',
      hidden: false,
      meta: { title: '白名单管理' }
    }
  ]
}
export default sysRouter
