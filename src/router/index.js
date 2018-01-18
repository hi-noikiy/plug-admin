const requireAuth = { requireAuth: true }

const loginComponent = resolve => require(['@/views/login'], resolve)

const primary_path = {
  main: resolve => require(['@/views/main'], resolve),
  welcome: resolve => require(['@/views/welcome'], resolve),
  games: resolve => require(['@/views/game/GameMain'], resolve)
}
  
// import all path component

const default_routes = [
  {
    path: '/',
    name: 'main',
    meta: requireAuth,
    component: primary_path.main,
    children: [
      {
        path: '/',
        meta: requireAuth,
        component: primary_path.welcome
      },
      {
        path: '/games/:id',
        meta: requireAuth,
        component: primary_path.games
      }
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