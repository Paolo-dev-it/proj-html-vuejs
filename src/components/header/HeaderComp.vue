<template>
  <div class="container">
    <LogoHeaderComp />
    <NavbarHeaderComp v-for="(elem, index) in navbarData" :key='index' :singleData="elem" />
  </div>
</template>

<script>
import LogoHeaderComp from '../header/LogoHeaderComp.vue'
import NavbarHeaderComp from '../header/NavbarHeaderComp.vue'
export default {
  name: 'HeaderComp',
  components: {
    LogoHeaderComp,
    NavbarHeaderComp
  },
  props: {
    navbarData: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
