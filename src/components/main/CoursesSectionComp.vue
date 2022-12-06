<!-- Componente importato su MainComp -->

<template>
    <div class="container">
        <!-- Contenitore carte con i corsi. Tutti i dati sono gestiti tramite props -->
        <div class="card-cont">
            <!-- PArte superiore carta con immagine e prezzo -->
            <div class="single-card-cont">
                <img :src="`/img/${singleLessonCardData.path}`" alt="">
                <div class="price">{{ singleLessonCardData.price }}</div>
            </div>
            <!-- Contenitore insegnante -->
            <div class="cont-small-teacher-img">
                <img class="small-teacher-img" :src="`/img/${singleLessonCardData.pathTeacher}`" alt="">
                <span>{{ singleLessonCardData.teacherName }}</span>
            </div>
            <!-- Descrizione corsi -->
            <div class="body-cont">
                <div class="name-sty">
                    <p>{{ singleLessonCardData.name }}</p>
                </div>
                <div class="cont-desc">
                    <span><font-awesome-icon class="descr-icn-img" icon="fa-regular fa-file-lines" />{{
                            singleLessonCardData.lessonsNumb
                    }}
                        Lessons</span>
                    <span><font-awesome-icon class="descr-icn-img" icon="fa-regular fa-user" />{{
                            singleLessonCardData.students
                    }} Students</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoursesSectionComp',
    props: {
        singleLessonCardData: String,
    }
}
</script>

<style lang="scss" scoped>
.card-cont {
    width: 300px;
    padding: 20px;

    // Contenitore carte
    .single-card-cont {
        position: relative;
        width: calc(100%/3);

        .price {
            position: absolute;
            width: 70px;
            top: 0px;
            right: -214px;
            background-color: #1FAD96;
            color: white;
            font-weight: bolder;
            padding: 10px;
            border-radius: 0px 0px 0px 5px;
        }
    }

    img {
        width: 300px;
    }

    // Contenitore teachers
    .cont-small-teacher-img {
        padding: 10px;
        display: flex;
        align-items: center;

        span {
            margin-left: 20px;
            font-weight: 200;
            color: gray;
        }

        .small-teacher-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    // Contenitore descrizione
    .cont-desc {
        padding: 0;
        font-weight: 200;
        color: gray;

        span {

            font-weight: 200;
            color: gray;
        }

        .descr-icn-img {
            margin-left: 5px;
            margin-right: 5px;
            margin-top: 30px;
        }
    }

    // Contenitore body carta
    .body-cont {
        text-align: left;
        width: 100%;

        .name-sty {
            padding: 3px;
            margin-bottom: 5px;
        }

        p {
            font-size: 1.4rem;
            font-weight: bold;
            line-height: 2.5rem;
        }
    }
}
</style>