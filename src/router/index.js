// 定义请求授权

const requireAuth = { requireAuth: true }

// resolve 路径优化
// 引入不需要授权的组件

const loginComponent = resolve => require(['@/views/login'], resolve)

// 引入主要路径组件
// 需要授权

const primary_path = {
  main: resolve => require(['@/views/main'], resolve),
  welcome: resolve => require(['@/views/welcome'], resolve),
  games: resolve => require(['@/views/game/GameMain'], resolve),
  acounts: resolve => require(['@/views/acounts/acounts'], resolve)
}
  
/**
 * 路由定义，使用上方所引入组件
 * path：*
 * 验证所定义的所有路由，在定义的路由中找不到匹配值时进入该组件，通常为 404 组件
 */

const default_routes = [
  {
    path: '/',
    name: 'main',
    meta: requireAuth,
    component: primary_path.main,
    children: [
      { path: '/', meta: requireAuth, component: primary_path.welcome },
      { path: '/games/:id', meta: requireAuth, component: primary_path.games },
      { path: '/game-acounts', meta: requireAuth, component: primary_path.acounts }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: loginComponent
  },
  {
    path: '*',
    component: resolve => require(['@/views/error/404'], resolve)
  }
]

export default default_routes