<template>
  <div id="app">

    <HeaderComp :navbarData="navbar" />
    <MainComp :lessonsData="lessons" :coursesData="courses" />
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

      ],

      courses: [
        {
          name: 'Learning to write as a professional author',
          path: 'course-02-480x298.jpg',
          price: '$ 40.00',
          lessonsNumb: 20,
        },
        {
          name: 'Customer-centric info-Tech strategies',
          path: 'stock-full-hd-03-480x298.jpg',
          price: 'free',
          lessonsNumb: 24,
          students: 50,
        },
        {
          name: 'Customer-centric info-Tech strategies',
          path: 'stock-full-hd-04-480x298.jpg',
          price: '$ 19.00',
          lessonsNumb: 17,
          students: 769,
        },
        {
          name: 'Customer-centric info-Tech strategies',
          path: 'stock-full-hd-06-480x298.jpg',
          price: '$ 26.00',
          lessonsNumb: 14,
          students: 67,
        },
        {
          name: 'Customer-centric info-Tech strategies',
          path: 'course-featured-image-01-480x298.jpg',
          price: '$ 39.00',
          lessonsNumb: 6,
          students: 51,
        },
        {
          name: 'Customer-centric info-Tech strategies',
          path: 'stock-full-hd-05-480x298.jpg',
          price: '$ 59.00',
          lessonsNumb: 14,
          students: 76,
        },

      ],
    }
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
