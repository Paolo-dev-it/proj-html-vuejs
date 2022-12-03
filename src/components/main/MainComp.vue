<template>
    <main>
        <div class="style-sub">
            <h4>start learning coding languages</h4>
            <h2 class="build-drm">Build your dream <span class="today-sty">today</span> </h2>
        </div>

        <div class="cont-card">
            <CardComp v-for="(elem, index) in lessonsData" :key='index' :singleCardData="elem" />
        </div>

        <PerspectiveSectionCompVue />
        <NumbersSectionComp />
        <div class="cont-card-courses">
            <CoursesSectionComp v-for="(element, index) in coursesData" :key='index' :singleLessonCardData="element" />
        </div>

    </main>
</template>

<script>
import CardComp from '../main/CardComp.vue'
import PerspectiveSectionCompVue from '../main/PerspectiveSectionComp.vue';
import NumbersSectionComp from '../main/NumbersSectionComp.vue';
import CoursesSectionComp from '../main/CoursesSectionComp.vue';

export default {

    name: 'MainComp',
    props: {
        lessonsData: Array,
        coursesData: Array,
    },
    components: {
        CardComp,
        PerspectiveSectionCompVue,
        NumbersSectionComp,
        CoursesSectionComp
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
    background-color: #FFFFFF;
    width: 100%;
}

.style-sub {
    width: 70%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 70px;
    text-align: center;
    text-transform: uppercase;
    font-weight: lighter;
    line-height: 3rem;

    .build-drm {
        text-transform: capitalize;
        font-size: 2.5rem;

        .today-sty {
            text-transform: uppercase;
            font-weight: lighter;
            color: #01afcB;
        }
    }
}

.cont-card {
    display: flex;
    width: 70%;
    margin: auto;
    gap: 30px;
}

.cont-card-courses {
    display: flex;
    width: 70%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
</style>