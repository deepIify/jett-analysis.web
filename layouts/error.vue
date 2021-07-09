<template lang="pug">
v-app
  error-page(:error='error')
</template>

<script>
import ErrorPage from '@/components/ErrorPage'
export default {
  name: 'error',
  layout: 'error',
  components: { ErrorPage },
  props: {
    error: {
      type: [Object, Error],
      default: () => {},
    },
  },
  head () {
    return { title: '이 페이지를 사용할 수 없습니다.' }
  }
}
</script>

<style scoped>
h1{font-size: 20px}
</style>
