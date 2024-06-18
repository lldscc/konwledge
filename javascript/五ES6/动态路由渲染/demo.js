// 动态路由渲染模拟
const Layout = 'Layout'
const layout = 'layout'
const department = 'department'
const role = 'role'

/**
 * 1.静态路由
 */
const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
    }]
  }
]

/**
 * 2.全部动态路由
 */
const asyncRouter = [
  {
    path: '/department',
    component: layout, // 一级路由： 布局组件
    name: 'department', //筛选权限的时候用
    children: [
      {
        path: '', // 二级路由 什么都不写 作为二级路由的默认组件
        component: () => import('@/views/department'),
        name: 'department', // 路由的名字
        meta: {
          title: '组织架构', // 元信息
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/role',
    component: layout,
    name: 'role',
    children: [{
      path: '',
      name: 'role',
      component: () => import('@/views/role'),
      meta: {
        title: '角色',
        icon: 'setting'
      }
    }]
  }
]

/**
 * 3.角色的权限(用户信息获得的权限信息字段)
 */
// 模拟管理员
const adminMenu = [department, role]
// 模拟角色A
const roleAmenu = [department]
// 模拟角色B
const roleBmenu = [role]


// 根据角色权限动态添加路由
const filterRoutes = asyncRouter.filter(item => {
  return roleAmenu.includes(item.name)
})

//任何角色最后都加上静态路由
constantRoutes.push(...filterRoutes)

console.log('根据角色权限动态添加路由：', constantRoutes)


// console.log('静态路由', constantRoutes)
// console.log('角色动态路由', asyncRouter)

//二级路由 及渲染
//1.如果有一级路由相同，二级路由不同，那么创建不同的一级路由=>  完成功能
//2.筛选不同的二级路由











