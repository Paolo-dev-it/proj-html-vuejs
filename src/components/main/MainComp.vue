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
        <div class="courses-section-cont">
            <h4>choose where you'd like to begin</h4>
            <h2>Latest featured <span> courses</span></h2>
            <div class="cont-card-courses">
                <CoursesSectionComp v-for="(element, index) in coursesData" :key='index'
                    :singleLessonCardData="element" />
            </div>
            <div class="cont-card-courses">
                <button class="btn">View all courses <font-awesome-icon class="ic-arr" icon="fa-arrow-right" /></button>
            </div>
        </div>
        <RegisterSectionComp />


    </main>
</template>

<script>
import CardComp from '../main/CardComp.vue'
import PerspectiveSectionCompVue from '../main/PerspectiveSectionComp.vue';
import NumbersSectionComp from '../main/NumbersSectionComp.vue';
import CoursesSectionComp from '../main/CoursesSectionComp.vue';
import RegisterSectionComp from '../main/RegisterSectionComp.vue';

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
        CoursesSectionComp,
        RegisterSectionComp,
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
    padding: 20px;
    margin-top: 40px;
}

h4 {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    text-transform: uppercase;
}

h2 {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    text-transform: capitalize;
    font-size: 3rem;


    span {
        margin-left: 8px;
        font-weight: lighter;
        color: #01afcB;
    }
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #01afcB;
    color: white;
    border-radius: 10px;
    width: 250px;
    border: 0;

    .ic-arr {
        margin-left: 10px;
    }
}
</style>