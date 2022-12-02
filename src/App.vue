<template>
  <div id="app">

    <HeaderComp :navbarData="navbar" />
    <MainComp :lessonsData="lessons" />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from './components/header/HeaderComp.vue'
import MainComp from './components/main/MainComp.vue'
import FooterComp from './components/footer/FooterComp.vue'


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data() {
    return {
      navbar: [
        {
          name: 'Home',
          url: 'https://www.google.it'
        },
        {
          name: 'Pages',
          url: 'https://www.google.it'
        },
        {
          name: 'Courses',
          url: 'https://www.google.it'
        },
        {
          name: 'Features',
          url: 'https://www.google.it'
        },
        {
          name: 'Blog',
          url: 'https://www.google.it'
        },
        {
          name: 'Shop',
          url: 'https://www.google.it'
        },

      ],
      lessons: [
        {
          type: 'Idea Discussion',
          url: 'home-5-image-box-01.png',
          description: 'Get teamed up with the specialists who work and teach coding for years at famous universities'
        },
        {
          type: 'Web Development',
          url: 'home-5-image-box-02.png',
          description: 'Get teamed up with the specialists who work and teach coding for years at famous universities'
        },
        {
          type: 'System Administration',
          url: 'home-5-image-box-03.png',
          description: 'Get teamed up with the specialists who work and teach coding for years at famous universities'
        },
        {
          type: 'Graphic Design',
          url: 'home-5-image-box-04.png',
          description: 'Get teamed up with the specialists who work and teach coding for years at famous universities'
        },

      ]
    }
  }

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;
}
</style>
