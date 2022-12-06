<template>
  <div id="app">
    <HeaderComp :navbarData="navbar" />
    <MainComp :lessonsData="lessons" :coursesData="courses" :eventsData="events" />
    <FooterComp :reviewsData="reviews" />
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
      // Array di oggetti Navbar
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
      // Array di oggetti Lezioni
      lessons: [
        {
          type: 'Idea Discussion',
          url: 'home-5-image-box-01.png',
          description: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
        },
        {
          type: 'Web Development',
          url: 'home-5-image-box-02.png',
          description: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'
        },
        {
          type: 'System Administration',
          url: 'home-5-image-box-03.png',
          description: 'Learners are encouraged to study the mechanism and structure of system administration.'
        },
        {
          type: 'Graphic Design',
          url: 'home-5-image-box-04.png',
          description: 'Have a passion for graphic and arts? Show your talents with confidence and self-assertiveness.'
        },

      ],
      // Array di oggetti Corsi
      courses: [
        {
          name: 'Learning to write as a professional author',
          path: 'course-02-480x298.jpg',
          pathTeacher: '73ee246daf47502812ccefc84bf02898.jpeg',
          teacherName: 'Blanche Fields',
          price: '$ 40.00',
          lessonsNumb: 20,
        },
        {
          name: 'Customer-centric info-Tech strategies',
          path: 'stock-full-hd-03-480x298.jpg',
          pathTeacher: 'd0d504142acfde820eef2f11feea6253.jpeg',
          teacherName: 'Maggie Strickland',
          price: 'Free',
          lessonsNumb: 24,
          students: 50,
        },
        {
          name: 'Open Programming Courses for Everyone: Python',
          path: 'stock-full-hd-04-480x298.jpg',
          pathTeacher: 'd0d504142acfde820eef2f11feea6253.jpeg',
          teacherName: 'Maggie Strickland',
          price: '$ 19.00',
          lessonsNumb: 17,
          students: 769,
        },
        {
          name: 'Academic Listening and Note-taking',
          path: 'stock-full-hd-06-480x298.jpg',
          pathTeacher: '73ee246daf47502812ccefc84bf02898.jpeg',
          teacherName: 'Blanche Fields',
          price: '$ 26.00',
          lessonsNumb: 14,
          students: 67,
        },
        {
          name: 'Master JQuery in a Short Period of Time',
          path: 'course-featured-image-01-480x298.jpg',
          pathTeacher: '73ee246daf47502812ccefc84bf02898.jpeg',
          teacherName: 'Blanche Fields',
          price: '$ 39.00',
          lessonsNumb: 6,
          students: 51,
        },
        {
          name: 'Introduction to Javascript for Beginners',
          path: 'stock-full-hd-05-480x298.jpg',
          pathTeacher: '73ee246daf47502812ccefc84bf02898.jpeg',
          teacherName: 'Blanche Fields',
          price: '$ 59.00',
          lessonsNumb: 14,
          students: 76,
        },

      ],
      // Array di oggetti Eventi
      events: [
        {
          place: 'Texas, US',
          event: 'storytelling workShop',
          number: 22,
          month: 'nov',

        },
        {
          place: 'New York, US',
          event: 'painting art contest 2022',
          number: 10,
          month: 'oct',
        },
        {
          place: 'Hamburg, Germany',
          event: 'international art fair 2022',
          number: 23,
          month: 'nov',
        },
        {
          place: 'Illinois, US',
          event: 'street performance: call for artist',
          number: 15,
          month: 'dec',
        },
        {
          place: 'Illinois, US',
          event: 'consumer food safety education conference',
          number: 22,
          month: 'jul',
        },
        {
          place: 'Dubai',
          event: 'how meditation improve your mental health?',
          number: 12,
          month: 'aug',
        },
      ],
      // Array di oggetti Recensioni
      reviews: [
        {
          path: 'testimonial-avata-02.jpg',
          description: "Im free to learn at my own pace, follow my own schedule and choode the subject I like. Great study portal for people like me.",
          name: 'mina hollace',
          job: '/ Freelancer',
        },
        {
          path: 'testimonial-avata-04.jpg',
          description: 'MaxCoach is the best choice. Their tutors are smart and professional when dealing with students.',
          name: 'madley pondor',
          job: '/ IT Specialist',
        },
        {
          path: 'testimonial-avata-01.jpg',
          description: 'Im happy with their arrangment of lessons and subjects. They reflect a scientific investigation.',
          name: 'luvic dubble',
          job: '/ Private Tutor',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto+Condensed&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Quicksand', sans-serif;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
