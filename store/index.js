export const state = () => ({
  authenticated: false,
  role: 'viewer',
  routes: [
    { name: 'index', label: 'Home' },
    { name: 'anonymous', label: 'Anonymous' },
    { name: 'named', label: 'Named' },
    { name: 'login', label: 'Login' },
    { name: 'admin', label: 'Admin' },
  ],
})

export const actions = {}

export const mutations = {}
