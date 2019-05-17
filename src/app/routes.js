import { pages } from './views'

const routes = [
  {
    path: '/',
    exact: true,
    component: pages.Claims
  },
  {
    path: '/login',
    exact: true,
    component: pages.Login
  }
]

export {
  routes
}
