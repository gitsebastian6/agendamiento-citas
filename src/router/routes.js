const routes = [
  // --- PÁGINAS PÚBLICAS (SIN HEADER) ---
  // --- LOGIN (SOLO LOGIN) ---
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },

  // --- PÁGINAS PÚBLICAS ---
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'home', component: () => import('pages/HomePage.vue') },
      // acá van todas las páginas sin autenticación
    ],
  },
  // --- PÁGINAS PRIVADAS (CON HEADER ADMIN) ---
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'), // tu layout admin
    children: [
      { path: '', redirect: '/admin/dashboard' },

      { path: 'dashboard', component: () => import('src/pages/AdminPage.vue') },
      { path: 'agenda', component: () => import('src/pages/AgendaPage.vue') },
      // Agrega aquí más rutas privadas
    ],
  },

  // --- ERROR 404 ---
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
