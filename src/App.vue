<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
export default {
  components: {
    DefaultLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout + '-layout';
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Akrobat';
  src: url('./assets/fonts/akrobat/Akrobat.ttf') format('truetype');
}
body {
  background: #131524;
}
#app {
  font-family: Akrobat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  /* position: relative; */
}

</style>
