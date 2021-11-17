// Example from NuxtJS documentation
// https://nuxtjs.org/docs/directory-structure/middleware/

export default async function ({ route, $axios }) {
  console.log('Stats middleware')

  try {
    return await $axios.post('http://my-stats-api.com', {
      url: route.fullPath,
    })
  } catch (err) {}
}
