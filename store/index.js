export const state = () => ({
  authenticated: true,
  role: 'viewer',
  routes: [
    { name: 'index', label: 'Home' },
    { name: 'anonymous', label: 'Anonymous' },
    { name: 'named', label: 'Named' },
    { name: 'login', label: 'Login' },
  ],
})

export const actions = {}

export const mutations = {}
