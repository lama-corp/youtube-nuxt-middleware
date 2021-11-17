import { routeOption } from '~/utils'

export default function ({ route, store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    console.log('User is not connected')
    return redirect('/login')
  } else {
    console.log('User is connected')
    if (!routeOption(route, 'role', store.state.role)) {
      return redirect('/error-role')
    }
  }
}
