<template>
  <div class="header">
    <div class="p-4">
      <nuxt-link
        v-for="route in routes"
        :key="route.name"
        :to="{ name: route.name }"
        class="mr-3"
      >
        <strong>{{ route.label }}</strong>
        <span v-if="route.subLabel"> : {{ route.subLabel }}</span>
      </nuxt-link>
    </div>
    <div class="pt-12">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LayoutDefault',
  middleware: 'insideamiddleware',
  // middleware: 'auth',
  computed: {
    ...mapState({
      routes: (state) => state.routes,
    }),
  },
}
</script>

<style scoped>
a {
  @apply inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
</style>
