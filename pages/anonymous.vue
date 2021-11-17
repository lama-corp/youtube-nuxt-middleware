<template>
  <div>This page contains an anonymous middleware</div>
</template>

<script>
export default {
  name: 'PageAnonymous',
  // middleware: ({ route, store, redirect }) => {
  //   if (!store.state.authenticated) {
  //     return redirect('/login')
  //   }
  // },

  middleware: [
    () => console.log('!!!SALUT!!!'),
    ({ route, store, redirect }) => {
      if (!store.state.authenticated) {
        return redirect('/login')
      }
    },
  ],
}
</script>
