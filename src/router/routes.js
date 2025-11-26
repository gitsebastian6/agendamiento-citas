const routes = [
  {
    path: '/home',
    component: () => import('pages/HomePage.vue'),
  },

  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AdminPage.vue') },
      { path: 'dashboard', component: () => import('src/pages/AdminPage.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
