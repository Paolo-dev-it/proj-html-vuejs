<template>
    <main>
        <!-- Primo titoletto main -->
        <div class="style-sub">
            <h4>start learning coding languages</h4>
            <h2 class="build-drm">Build your dream <span class="today-sty">today</span> </h2>
        </div>
        <!-- Componente che gestisce il props derivante da App.vue all'interno del suo contenitore -->
        <div class="cont-card">
            <CardComp v-for="(elem, index) in lessonsData" :key='index' :singleCardData="elem" />
        </div>
        <!-- Componente perspective -->
        <PerspectiveSectionCompVue />
        <!-- Componente Numbers -->
        <NumbersSectionComp />
        <!-- Sezione courses che gestisce il props derivante da App.vue all'interno del suo contenitore -->
        <div class="courses-section-cont">
            <h4>choose where you'd like to begin</h4>
            <h2>Latest featured <span> courses</span></h2>
            <div class="cont-card-courses">
                <CoursesSectionComp v-for="(element, index) in coursesData" :key='index'
                    :singleLessonCardData="element" />
            </div>
            <div class="cont-card-courses-btn">
                <button class="btn">View all courses <font-awesome-icon class="ic-arr" icon="fa-arrow-right" /></button>
            </div>
        </div>
        <!-- Componente Register -->
        <RegisterSectionComp />
        <!-- Componente Mobile -->
        <MobileSectionComp />
        <div class="event-section-cont">
            <h3>get in contact now</h3>
            <h2>upcoming <span>events</span></h2>
            <!-- Sezione events che gestisce il props derivante da App.vue all'interno del suo contenitore -->
            <div class="single-event-section">
                <EventsSectionComp v-for="(element, index) in eventsData" :key='index' :singleEventCardData="element" />
            </div>
            <span class="events-cta">Excited about our events?<span class="all-events"> View all events
                    <font-awesome-icon class="ic-arr" icon="fa-arrow-right" />
                </span>
            </span>
        </div>
    </main>
</template>

<script>
import CardComp from '../main/CardComp.vue'
import PerspectiveSectionCompVue from '../main/PerspectiveSectionComp.vue';
import NumbersSectionComp from '../main/NumbersSectionComp.vue';
import CoursesSectionComp from '../main/CoursesSectionComp.vue';
import RegisterSectionComp from '../main/RegisterSectionComp.vue';
import MobileSectionComp from '../main/MobileSectionComp.vue';
import EventsSectionComp from '../main/EventsSectionComp.vue';

export default {
    name: 'MainComp',
    props: {
        lessonsData: Array,
        coursesData: Array,
        eventsData: Array,
    },
    components: {
        CardComp,
        PerspectiveSectionCompVue,
        NumbersSectionComp,
        CoursesSectionComp,
        RegisterSectionComp,
        MobileSectionComp,
        EventsSectionComp
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
    background-color: #FAF8F6;
    width: 100%;
}

// Stile primo sottotitolo
.style-sub {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 70px;
    text-align: center;
    text-transform: uppercase;
    font-weight: lighter;
    line-height: 3rem;

    h4 {
        padding-top: 40px;
    }

    // Stile build your dream
    .build-drm {
        text-transform: capitalize;
        font-size: 2.5rem;

        .today-sty {
            text-transform: uppercase;
            font-weight: lighter;
            color: #1FAD96;
        }
    }
}

// Stile sezione lezioni
.cont-card {
    display: flex;
    width: 70%;
    margin: auto;
    gap: 30px;
}

// Stile sezione corsi
.courses-section-cont {
    width: 100%;
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

.cont-card-courses-btn {
    display: flex;
    width: 200px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
}

.cont-card-courses-btn:hover {
    background-color: rgb(255, 255, 255);
    color: white;
    transition-duration: 0.5s;
}

.cont-card-courses-btn:hover .btn {
    background-color: white;
    color: #1FAD96;
    transition-duration: 0.5s;
}

.cont-card-courses-btn:hover .ic-arr {
    color: #1FAD96;
    background-color: white;
    transition-duration: 0.5s;
}

.cont-card-courses-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #1FAD96;
    color: white;
    border-radius: 10px;
    width: 250px;
    border: 0;

    .btn {
        border: 0;
        background-color: #1FAD96;
        color: white;
    }

    .ic-arr {
        margin-left: 10px;
    }
}

h4 {
    display: flex;
    justify-content: center;
    padding-top: 50px;
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
        color: #1FAD96;
    }
}

// Stile sezione eventi
.event-section-cont {
    padding: 50px 0px 50px 0px;
    width: 70%;
    margin: auto;

    h3 {
        text-align: center;
        text-transform: uppercase;
        color: gray;
    }

    h2 {
        margin-top: 10px;
        margin-bottom: 50px;
    }

    .single-event-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 25px;
        padding: 10px;
    }

    .events-cta {
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: 50px;
        color: gray;

        .all-events {
            color: #1FAD96;
            margin-left: 10px;
            text-decoration: underline;
            text-decoration-color: gray;
            text-decoration-thickness: 1px;
        }

        .all-events:hover {
            color: #403A64;
            cursor: pointer;
            text-decoration: underline;
            text-decoration-color: #1FAD96;
            text-decoration-thickness: 1px;
        }
    }
}
</style>