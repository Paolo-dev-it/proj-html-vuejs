<template>
  <div id="app">

    <HeaderComp />
  </div>
</template>

<script>
import HeaderComp from './components/header/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {}
</style>
