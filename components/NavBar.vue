<template lang="pug">
nav#nav-bar
  v-app-bar(absolute color='white' elevate-on-scroll scroll-target='#scrolling-techniques-7')
    v-toolbar-title
      router-link(to='/' style='text-decoration: none') {{ $site.siteName }}
    v-spacer
    v-btn(icon)
      v-icon mdi-magnify
    template()
    v-btn(icon)
      v-icon mdi-heart
    v-btn(icon)
      v-icon mdi-dots-vertical
</template>
