<template>
  <div>
    <div class="bg-red-500 w-full">Admin pages Header</div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutAdmin',
  // requiredRole: 'admin',
  middleware: 'auth',
}
</script>
