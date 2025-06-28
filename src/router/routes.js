const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('pages/WalletPage.vue') },
      { path: 'next-step-page', component: () => import('pages/NextStepPage.vue') },  // <-- Added here
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes;
