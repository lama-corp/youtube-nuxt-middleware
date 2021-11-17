<template>
  <div>This page contains a "named" middleware</div>
</template>

<script>
export default {
  name: 'PageNamed',
  // middleware: 'auth',
  middleware: [
    'another',
    () => {
      console.log('TEST')
    },
  ],
}
</script>
