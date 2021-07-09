<template lang="pug">
#error-page
  .error-page-content
    img.error-page-hh-illustration(src='/error-monkey.png' alt='error')
    p 죄송합니다. 이 페이지를 사용할 수 없습니다.
</template>

<script>
export default {
  name: 'ErrorPage',
  props: ['error'],
  data () {
    return { searchText: '' }
  },
  methods: {
    search () {
      if (!this.searchText) return
      this.$router.push({ path: '/search', query: { q: this.searchText } })
      this.$emit('onSearch', this.searchText)
      this.searchText = ''
    }
  },
  computed: {
    isDark () {
      return this.$vuetify.theme.isDark
    }
  }
}
</script>


<style lang="scss">
#error-page {
  text-align: center;
  height: 100%;
  white-space: nowrap;
  word-break: normal;
  .error-page-content {
    margin-top: 5rem;
    display: inline-block;
    .error-page-hh-illustration {
      margin-bottom: 10px;
    }
    p {
      width: 500px;
      margin: auto;
      color: #333;
      font-size: 16px;
      white-space: normal;
      text-shadow: 0 0 0 transparent, 0 1px 1px #fff;
    }
  }
}
</style>
